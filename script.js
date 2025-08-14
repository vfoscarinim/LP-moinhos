document.getElementById('leadForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    nome: form.nome.value,
    email: form.email.value,
    faixa: form.faixa.value,
    renda: form.renda.value
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwHDPt61XFoIESYaqq2eYgbxSfihuvM84uvLgIsAXdgSt4nQoMLoS4--KtTNj1b4yFJfg/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();

    if (result.status === 'sucesso') {
      const nomeEncoded = encodeURIComponent(data.nome);
      const rendaEncoded = encodeURIComponent(data.renda);
      window.location.href = `https://wa.me/5551993062650?text=Olá. Meu nome é ${nomeEncoded} e tenho interesse em conhecer o método P.A.R. Minha meta de renda é ${rendaEncoded}. Podemos conversar?`;
    } else {
      alert("Erro ao enviar os dados. Tente novamente.");
      console.error(result); // log do erro vindo da API
    }

  } catch (err) {
    alert("Erro ao enviar. Tente novamente.");
    console.error(err);
  }
});