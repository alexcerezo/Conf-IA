const API_KEY = "API KEY HERE";

async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      "messages": [
        { "role": "system",
          "content": "You are a information verifier."
        },
        {
          "role": "user",
          "content": "Verifica la siguiente afirmación: " + prompt + ". Indica si es verdadera o falsa y adjunta una fuente de respaldo.",
        }
      ],
      // max_tokens: 50,
      temperature: 0.2,
    }),
  });

  const data = await response.json();
  // console.log(data)
  return data;
}

// getCompletion()

const prompt = document.querySelector("#prompt");
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

button.addEventListener("click", async () => {
  console.log(prompt.value);

  if (!prompt.value) return;

  const response = await getCompletion(prompt.value);
  console.log(response);
  output.innerHTML = response.choices[0].message.content;

  // Verifica si la respuesta contiene "falso"
  if (response.choices[0].message.content.toLowerCase().includes('falso') || response.choices[0].message.content.toLowerCase().includes('falsa')) {
    // Cambia las variables CSS si la respuesta contiene "falso"
    document.documentElement.style.setProperty('--start-color', 'rgb(36, 0, 0)');
    document.documentElement.style.setProperty('--end-color', 'rgb(97,14,14)');
  }

  if (response.choices[0].message.content.toLowerCase().includes('verdadero') || response.choices[0].message.content.toLowerCase().includes('verdadera') || response.choices[0].message.content.toLowerCase().includes('verdad')) {
    // Cambia las variables CSS si la respuesta contiene "falso"
    document.documentElement.style.setProperty('--start-color', 'rgb(2, 36, 0)');
    document.documentElement.style.setProperty('--end-color', 'rgb(28, 97, 14)');
  }
});
