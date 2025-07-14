// import OdooClient from "~/server/utils/odooClient.ts";
// export default defineEventHandler(async (event) => {
//   const slugParam = getRouterParam(event, 'slug'); // Get the slug from the route params
//   // const id = parseInt(idParam, 10); // Convert the ID to an integer (removed)

//   if (!slugParam) {
//     return console.log({ success: false, error: 'Blog slug is required' });
//   }
//   try {
//     const odoo = new OdooClient();
//     // Search for the blog post with the matching slug
//     const result = await odoo.callModel('blog.post', "search_read", [
//       [['x_slug', '=', slugParam]], // Filter by x_slug
//       ["id", "name", "content",'x_slug','x_image','published_date','website_meta_title','website_meta_description','website_meta_keywords'] // Fields to retrieve
//     ]);

//     if (result.length > 0) {
//       return { success: true, data: result[0] }; // Return the first matching blog post
//     } else {
//       return { success: false, error: 'Blog not found' };
//     }
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// }); 