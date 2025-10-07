test("GET to api/v1/migration must return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/migration");
  expect(res.status).toBe(200);

  const responseBody = await res.json();
  expect(Array.isArray(responseBody)).toBe(true);
});
