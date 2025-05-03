// URL base da API
const baseURL = 'https://xxx.ngrok-free.app';


// script.js
document.addEventListener('DOMContentLoaded', () => {
    let sintomaSelecionado = '';
    const btnsSintoma = document.querySelectorAll('.symptom-buttons button');
    const nivelInput = document.getElementById('nivelSintoma');
    const nivelValor = document.getElementById('nivelValor');
    const btnEnviar = document.getElementById('btnEnviar');
    const resultadoDiv = document.getElementById('resultado');
    const btnDescartar = document.getElementById('btnDescartar');
    const btnArquivar = document.getElementById('btnArquivar');
  
    btnsSintoma.forEach(btn => {
      btn.addEventListener('click', () => {
        btnsSintoma.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        sintomaSelecionado = btn.dataset.sintoma;
      });
    });
  
    nivelInput.addEventListener('input', () => {
      nivelValor.textContent = nivelInput.value;
    });
  
    btnEnviar.addEventListener('click', async () => {
      if (!sintomaSelecionado) {
        alert('Selecione um sintoma.');
        return;
      }
      const payload = {
        sintomas: sintomaSelecionado,
        nivel_sintoma: parseInt(nivelInput.value),
        observacoes_enfermeiro: document.getElementById('obsEnfermeiro').value,
        temperatura: document.getElementById('temp').value,
        glicose: document.getElementById('glicose').value,
        saturacao: document.getElementById('saturacao').value,
        pressao: document.getElementById('pressao').value
      };
      resultadoDiv.innerHTML = '<em>Carregando...</em>';
      try {
        const res = await fetch(`${baseURL}/api/diagnostico`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        resultadoDiv.textContent = data.diagnostico;
      } catch (err) {
        resultadoDiv.innerHTML = '<span style="color:red">Erro ao contatar a API.</span>';
        console.error(err);
      }
    });
  
    btnDescartar.addEventListener('click', () => {
      resultadoDiv.innerHTML = '<em>Diagnóstico descartado.</em>';
    });
  
    btnArquivar.addEventListener('click', () => {
      alert('Diagnóstico arquivado com sucesso!');
    });
  });
  