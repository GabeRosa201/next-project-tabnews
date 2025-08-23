test("GET to api/v1/status must return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const responseBody = await res.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedDate = new Date(responseBody.updated_at).toISOString();
  expect(parsedDate).toEqual(responseBody.updated_at);
});
