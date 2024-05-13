function SecretPage() {
  return (
    <div>Your secret is {process.env.SECRET}. Do not tell it to anyone</div>
  );
}

export default SecretPage;
