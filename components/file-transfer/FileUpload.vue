<template>
  <section class="container flex items-start justify-center   mx-auto mt-8 space-x-5">
    <!-- New Left Column: Header and Text -->
    <div class="w-4/12">
      <div class="p-6 mb-4">
        <h1 class="text-[4rem] font-semibold mb-2 leading-tight">Auto Expiring Encrypted Transfers You Can Trust</h1>
        <p class="text-gray-600">Easily upload and share your files with a simple link. Your files are safe and secure with us.</p>
      </div>
    </div>

    <!-- Middle Column: Upload Area and Form -->
    <div class="w-4/12">
      <!-- Upload Area -->
      <div class="bg-white rounded-[24px] p-6 border-2 border-[#00003608] mb-4">
        <div class="text-center transition bg-[#F6F6F6] rounded-[24px] p-4" :class="{ 'border-blue-500 bg-blue-50': isDragging }" @dragenter.prevent="isDragging = true" @dragleave.prevent="isDragging = false" @dragover.prevent @drop.prevent="handleDrop">
          <input type="file" multiple class="hidden" ref="fileInput" @change="handleFileSelect" />
          <div class="flex flex-col items-center cursor-pointer group" @click="handleFileInputClick">
            <Icon name="material-symbols:upload-rounded" class="w-16 h-16 text-offload-black group-hover:text-offload-pink transition-colors" />
            <span class="mt-2 text-2xl text-offload-black group-hover:text-offload-pink transition-colors">Upload Files</span>
          </div>
          <div class="mt-2 text-gray-500">Maximum File Limit <span class="text-offload-pink">5GB</span></div>
        </div>
      </div>

      <!-- Email Form -->
      <div class="bg-white rounded-[24px] p-6 border-2 border-[#00003608]">
        <form @submit.prevent="sendEmailForm" class="space-y-4">
          <input v-model="senderEmail" type="email" class="w-full border rounded-[12px] px-3 py-1" placeholder="Your Email" required />
          <input v-model="recipientEmail" type="email" class="w-full border rounded-[12px] px-3 py-1" placeholder="Email to" required />
          <input v-model="emailTitle" type="text" class="w-full border rounded-[12px] px-3 py-1" placeholder="Title" required />
          <textarea v-model="emailMessage" class="w-full border rounded-[12px] px-3 py-1" placeholder="Message" rows="4"></textarea>
          <button class="px-4 py-4 bg-offload-pink text-white rounded-[15px] hover:bg-offload-black w-full" :disabled="sendingEmail">
            <span v-if="sendingEmail">Sending...</span>
            <span v-else>Continue</span>
          </button>
        </form>
        <div v-if="emailStatus" class="mt-2 text-green-600">{{ emailStatus }}</div>
      </div>
    </div>

    <!-- Right Column: File List -->
    <div class="w-4/12">
      <div class="bg-white rounded-[24px] p-6 border-2 border-[#00003608]">
        <!-- File List -->
        <div v-if="files.length" class="mt-4 space-y-2">
          <div v-for="(file, idx) in files" :key="file.name + file.size" class="flex items-center justify-between space-x-4">
            <div class="bg-[#00003608] rounded-[12px] px-3 py-2 w-full">
              <div class="font-medium">{{ file.name }}</div>
              <div class="text-xs text-gray-400">{{ formatFileSize(file.size) }}</div>
            </div>
            <button class="text-red-500 bg-[#00003608] rounded-[12px] px-4 py-4 flex items-center justify-center" @click="removeFile(idx)"><Icon name="material-symbols:delete-outline" class="w-5 h-5" /></button>
          </div>
        </div>
        <!-- Empty State -->
        <div v-else class="flex flex-col items-center justify-center py-8 text-gray-400">
          <Icon name="material-symbols:upload-file-outline" class="w-16 h-16 mb-2" />
          <p class="text-sm">No files selected</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const files = ref<File[]>([])
const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const maxSize = 5 * 1024 * 1024 * 1024 // 5GB
const error = ref('')
const uploading = ref(false)
const uploadResult = ref<any>(null)
const email = ref('')
const sendingEmail = ref(false)
const emailStatus = ref('')

// New form fields
const senderEmail = ref('')
const recipientEmail = ref('')
const emailTitle = ref('')
const emailMessage = ref('')

const totalSize = computed(() => files.value.reduce((sum, f) => sum + f.size, 0))

function handleDrop(e: DragEvent) {
  isDragging.value = false
  if (e.dataTransfer?.files) {
    addFiles(Array.from(e.dataTransfer.files))
  }
}
function handleFileSelect(e: Event) {
  const input = e.target as HTMLInputElement
  if (input.files) {
    addFiles(Array.from(input.files))
  }
}
function addFiles(newFiles: File[]) {
  error.value = ''
  for (const file of newFiles) {
    if (totalSize.value + file.size > maxSize) {
      error.value = 'Total size exceeds 5GB limit.'
      break
    }
    if (!files.value.find(f => f.name === file.name && f.size === file.size)) {
      files.value.push(file)
    }
  }
}
function removeFile(idx: number) {
  files.value.splice(idx, 1)
}
function formatFileSize(bytes: number) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
async function uploadFiles() {
  error.value = ''
  uploading.value = true
  try {
    const form = new FormData()
    files.value.forEach(f => form.append('file', f))
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: form,
    })
    if (!res.ok) throw new Error(await res.text())
    uploadResult.value = await res.json()
    files.value = []
  } catch (e: any) {
    error.value = e.message || 'Upload failed'
  } finally {
    uploading.value = false
  }
}
function copyLink() {
  if (uploadResult.value?.link) {
    navigator.clipboard.writeText(uploadResult.value.link)
  }
}
async function sendEmailForm() {
  if (!senderEmail.value || !recipientEmail.value) return
  sendingEmail.value = true
  emailStatus.value = ''
  try {
    // Implement the email sending logic here
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        senderEmail: senderEmail.value,
        recipientEmail: recipientEmail.value,
        title: emailTitle.value,
        message: emailMessage.value,
        link: uploadResult.value.link,
      }),
    })
    if (!res.ok) throw new Error(await res.text())
    emailStatus.value = 'Email sent!'
    senderEmail.value = ''
    recipientEmail.value = ''
    emailTitle.value = ''
    emailMessage.value = ''
  } catch (e: any) {
    emailStatus.value = e.message || 'Failed to send email'
  } finally {
    sendingEmail.value = false
  }
}
function handleFileInputClick() {
  fileInput.value?.click();
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style> 