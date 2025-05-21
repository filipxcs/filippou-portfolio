import OdooClient from "~/server/utils/odooClient.ts";

export default defineEventHandler(async (event) => {
  try {
    const odoo = new OdooClient();
    const result = await odoo.callModel('blog.post', "search_read", [[['is_published', '=', true]], ["id", "name",'published_date','content','x_image','author_name','is_published','tag_ids','x_slug','website_meta_title','website_meta_description']]);
    
    // Fetch tags for each post
    const tagIds = result.map(post => post.tag_ids).flat();
    const tags = await odoo.callModel('blog.tag', "search_read", [[['id', 'in', tagIds]], ["id", "name"]]);
    
    // Attach tags to each post
    const postsWithTags = result.map(post => ({
        ...post,
        tags: tags.filter(tag => post.tag_ids.includes(tag.id))
    }));
    
    return { success: true, data: postsWithTags };
  } catch (error) {
    return { success: false, error: error.message };
  }
});