document.getElementById("leadForm").addEventListener("submit", function() {
    const agora = new Date();
    // Formato: DD/MM/YYYY HH:MM:SS
    const dataHoraFormatada = agora.toLocaleDateString('pt-BR') + " " + agora.toLocaleTimeString('pt-BR');
    document.getElementById("data/Hora").value = dataHoraFormatada;
  });
