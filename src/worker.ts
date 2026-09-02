export default {
  async fetch(request: Request): Promise<Response> {
    return new Response("Not found", {
      status: 404,
      headers: { "Cache-Control": "max-age=3600" }
    });
  },
};
