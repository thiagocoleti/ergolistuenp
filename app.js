const criteriaData = [
    {
        id: 1,
        title: "1. CONDUÇÃO",
        subcriteria: [
            {
                title: "1.1 Convite (Prompting)",
                questions: [
                    "O sistema orienta claramente o usuário sobre o que deve ser feito em cada etapa?",
                    "Os elementos interativos (botões, campos, links) indicam sua função de forma evidente?",
                    "Há instruções visíveis que reduzem a necessidade de tentativa e erro?"
                ]
            },
            {
                title: "1.2 Agrupamento/Distinção por Localização",
                questions: [
                    "Os elementos relacionados estão organizados próximos entre si?",
                    "A separação entre grupos de informações é visualmente clara?",
                    "A disposição dos elementos facilita a identificação de blocos funcionais?"
                ]
            },
            {
                title: "1.3 Agrupamento/Distinção por Formato",
                questions: [
                    "Elementos semelhantes possuem aparência visual consistente?",
                    "Diferentes tipos de informação são distinguidos por cores, tamanhos ou estilos?",
                    "Os elementos importantes se destacam adequadamente dos demais?"
                ]
            },
            {
                title: "1.4 Feedback Imediato",
                questions: [
                    "O sistema responde imediatamente às ações do usuário?",
                    "O usuário consegue perceber que sua ação foi registrada?",
                    "Há indicação clara de processamento (ex: carregamento, sucesso, erro)?"
                ]
            },
            {
                title: "1.5 Legibilidade",
                questions: [
                    "Os textos são fáceis de ler (tamanho, contraste, fonte)?",
                    "A organização textual facilita a leitura rápida?",
                    "O uso de cores não compromete a compreensão da informação?"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "2. CARGA DE TRABALHO",
        subcriteria: [
            {
                title: "2.1.1 Concisão",
                questions: [
                    "As informações apresentadas são diretas e sem excesso de conteúdo?",
                    "Os textos evitam redundâncias desnecessárias?",
                    "A interface apresenta apenas o essencial para a tarefa?"
                ]
            },
            {
                title: "2.1.2 Ações Mínimas",
                questions: [
                    "O número de passos para completar tarefas é reduzido?",
                    "O sistema evita solicitações desnecessárias ao usuário?",
                    "Existem atalhos ou automatizações para tarefas frequentes?"
                ]
            },
            {
                title: "2.2 Densidade Informacional",
                questions: [
                    "A quantidade de informação por tela é adequada?",
                    "A interface evita sobrecarga cognitiva?",
                    "Há equilíbrio entre informação exibida e espaço visual?"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "3. CONTROLE EXPLÍCITO",
        subcriteria: [
            {
                title: "3.1 Ações Explícitas do Usuário",
                questions: [
                    "O sistema executa ações somente após comandos claros do usuário?",
                    "Não ocorrem ações automáticas inesperadas?",
                    "O usuário tem controle sobre o início das operações?"
                ]
            },
            {
                title: "3.2 Controle do Usuário",
                questions: [
                    "O usuário pode interromper ou cancelar ações em andamento?",
                    "É possível desfazer ações realizadas?",
                    "O sistema permite navegação livre sem impor fluxos rígidos?"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "4. ADAPTABILIDADE",
        subcriteria: [
            {
                title: "4.1 Flexibilidade",
                questions: [
                    "O sistema permite diferentes formas de realizar a mesma tarefa?",
                    "Existem atalhos para usuários experientes?",
                    "A interface se adapta a diferentes níveis de habilidade?"
                ]
            },
            {
                title: "4.2 Consideração da Experiência do Usuário",
                questions: [
                    "O sistema diferencia usuários iniciantes e experientes?",
                    "Há suporte progressivo (ex: dicas, tutoriais)?",
                    "Funcionalidades avançadas não interferem na simplicidade inicial?"
                ]
            }
        ]
    },
    {
        id: 5,
        title: "5. GESTÃO DE ERROS",
        subcriteria: [
            {
                title: "5.1 Proteção contra Erros",
                questions: [
                    "O sistema previne erros antes que ocorram?",
                    "Há validação de dados em tempo real?",
                    "Campos possuem restrições adequadas (formato, tipo)?"
                ]
            },
            {
                title: "5.2 Qualidade das Mensagens de Erro",
                questions: [
                    "As mensagens são claras e compreensíveis?",
                    "As mensagens indicam exatamente o problema?",
                    "O tom das mensagens é adequado (não técnico ou agressivo)?"
                ]
            },
            {
                title: "5.3 Correção de Erros",
                questions: [
                    "O sistema sugere como corrigir o erro?",
                    "O usuário pode corrigir facilmente sem reiniciar o processo?",
                    "Os dados inseridos são preservados após erro?"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "6. CONSISTÊNCIA",
        subcriteria: [
            {
                title: "Geral",
                questions: [
                    "Elementos semelhantes possuem comportamento semelhante?",
                    "A interface mantém padrões visuais ao longo do sistema?",
                    "A terminologia é usada de forma uniforme?",
                    "A navegação segue padrões previsíveis?"
                ]
            }
        ]
    },
    {
        id: 7,
        title: "7. SIGNIFICADO DOS CÓDIGOS E DENOMINAÇÕES",
        subcriteria: [
            {
                title: "Geral",
                questions: [
                    "Os ícones são facilmente compreendidos sem explicação adicional?",
                    "Os rótulos representam corretamente suas funções?",
                    "Os termos utilizados são familiares ao usuário?",
                    "Evita-se uso de jargões técnicos desnecessários?"
                ]
            }
        ]
    },
    {
        id: 8,
        title: "8. COMPATIBILIDADE",
        subcriteria: [
            {
                title: "Geral",
                questions: [
                    "O sistema corresponde às expectativas do usuário?",
                    "Está alinhado com práticas comuns de outras interfaces?",
                    "Considera o contexto real de uso (ambiente, dispositivo, perfil)?",
                    "O fluxo do sistema é compatível com a lógica da tarefa do usuário?"
                ]
            }
        ]
    }
];

// App State
let state = {
    appName: "",
    appType: "",
    answers: {}, // questionId -> { response: "Sim/Não/NA", recommendation: "" }
    totalQuestions: 0
};

// DOM Elements
const screens = {
    setup: document.getElementById('setup-screen'),
    inspection: document.getElementById('inspection-screen'),
    results: document.getElementById('results-screen')
};

const setupInputs = {
    name: document.getElementById('app-name'),
    type: document.getElementById('app-type'),
    startBtn: document.getElementById('start-btn')
};

const inspectionUI = {
    appDisplay: document.querySelector('#current-app-display span'),
    progressText: document.getElementById('progress-text'),
    progressFill: document.getElementById('progress-fill'),
    questionsContainer: document.getElementById('questions-container'),
    finishBtn: document.getElementById('finish-btn')
};

const resultsUI = {
    appName: document.getElementById('result-app-name'),
    appType: document.getElementById('result-app-type'),
    statsContainer: document.getElementById('stats-container'),
    tableBody: document.querySelector('#results-table tbody'),
    newBtn: document.getElementById('new-inspection-btn'),
    printBtn: document.getElementById('print-btn')
};

// Initialize
function init() {
    calculateTotalQuestions();
    setupEventListeners();
}

function calculateTotalQuestions() {
    let count = 0;
    criteriaData.forEach(c => {
        c.subcriteria.forEach(s => {
            count += s.questions.length;
        });
    });
    state.totalQuestions = count;
}

function setupEventListeners() {
    setupInputs.startBtn.addEventListener('click', startInspection);
    inspectionUI.finishBtn.addEventListener('click', finishInspection);
    resultsUI.newBtn.addEventListener('click', () => location.reload());
    resultsUI.printBtn.addEventListener('click', () => window.print());
}

function showScreen(screenId) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenId].classList.add('active');
    window.scrollTo(0, 0);
}

function startInspection() {
    state.appName = setupInputs.name.value.trim();
    if (!state.appName) {
        alert("Por favor, informe o nome da aplicação.");
        return;
    }
    state.appType = setupInputs.type.value;
    
    inspectionUI.appDisplay.textContent = state.appName;
    renderQuestions();
    updateProgress();
    showScreen('inspection');
}

function renderQuestions() {
    inspectionUI.questionsContainer.innerHTML = '';
    
    criteriaData.forEach((criterion, cIdx) => {
        const critDiv = document.createElement('div');
        critDiv.className = 'criterion-group';
        critDiv.innerHTML = `<div class="criterion-title">${criterion.title}</div>`;
        
        criterion.subcriteria.forEach((sub, sIdx) => {
            const subDiv = document.createElement('div');
            subDiv.className = 'subcriterion-group';
            subDiv.innerHTML = `<div class="subcriterion-title">${sub.title}</div>`;
            
            sub.questions.forEach((qText, qIdx) => {
                const qId = `${cIdx}-${sIdx}-${qIdx}`;
                const qDiv = document.createElement('div');
                qDiv.className = 'question-item';
                qDiv.dataset.id = qId;
                
                qDiv.innerHTML = `
                    <p class="question-text">${qText}</p>
                    <div class="answer-options">
                        <button class="option-btn" data-value="Sim">Sim</button>
                        <button class="option-btn" data-value="Não">Não</button>
                        <button class="option-btn" data-value="NA">N/A</button>
                    </div>
                    <div class="recommendation-input" id="rec-container-${qId}">
                        <textarea placeholder="Sua recomendação..." id="rec-${qId}"></textarea>
                    </div>
                `;
                
                // Add events to options
                const btns = qDiv.querySelectorAll('.option-btn');
                btns.forEach(btn => {
                    btn.addEventListener('click', () => handleAnswer(qId, btn.dataset.value, btns, qDiv));
                });

                // Add event to textarea
                const textarea = qDiv.querySelector('textarea');
                textarea.addEventListener('input', (e) => {
                    if (state.answers[qId]) {
                        state.answers[qId].recommendation = e.target.value;
                    }
                });

                subDiv.appendChild(qDiv);
            });
            critDiv.appendChild(subDiv);
        });
        inspectionUI.questionsContainer.appendChild(critDiv);
    });
}

function handleAnswer(qId, value, btns, container) {
    // UI Update
    btns.forEach(b => b.classList.remove('selected'));
    const selectedBtn = Array.from(btns).find(b => b.dataset.value === value);
    selectedBtn.classList.add('selected');
    
    // Show recommendation if "Não"
    const recContainer = document.getElementById(`rec-container-${qId}`);
    if (value === "Não") {
        recContainer.classList.add('visible');
    } else {
        recContainer.classList.remove('visible');
    }
    
    // Update State
    const existingRec = state.answers[qId]?.recommendation || "";
    state.answers[qId] = {
        response: value,
        recommendation: existingRec
    };
    
    updateProgress();
}

function updateProgress() {
    const answeredCount = Object.keys(state.answers).length;
    const percent = Math.round((answeredCount / state.totalQuestions) * 100);
    
    inspectionUI.progressFill.style.width = `${percent}%`;
    inspectionUI.progressText.textContent = `Progresso: ${percent}% (${answeredCount} / ${state.totalQuestions} respondidas)`;
    
    inspectionUI.finishBtn.disabled = answeredCount === 0;
}

function finishInspection() {
    if (Object.keys(state.answers).length < state.totalQuestions) {
        if (!confirm("Você ainda não respondeu todas as questões. Deseja finalizar assim mesmo?")) {
            return;
        }
    }
    
    renderResults();
    showScreen('results');
}

function renderResults() {
    resultsUI.appName.textContent = state.appName;
    resultsUI.appType.textContent = state.appType;
    
    // Stats
    const answered = Object.keys(state.answers).length;
    const unanswered = state.totalQuestions - answered;
    const percentAnswered = Math.round((answered / state.totalQuestions) * 100);
    
    resultsUI.statsContainer.innerHTML = `
        <div class="stat-card">
            <span class="stat-value">${state.totalQuestions}</span>
            <span class="stat-label">Total de Questões</span>
        </div>
        <div class="stat-card">
            <span class="stat-value">${percentAnswered}%</span>
            <span class="stat-label">Concluído</span>
        </div>
        <div class="stat-card">
            <span class="stat-value">${answered}</span>
            <span class="stat-label">Respondidas</span>
        </div>
        <div class="stat-card">
            <span class="stat-value">${unanswered}</span>
            <span class="stat-label">Pendentes</span>
        </div>
    `;
    
    // Table
    resultsUI.tableBody.innerHTML = '';
    
    criteriaData.forEach((criterion, cIdx) => {
        criterion.subcriteria.forEach((sub, sIdx) => {
            sub.questions.forEach((qText, qIdx) => {
                const qId = `${cIdx}-${sIdx}-${qIdx}`;
                const answer = state.answers[qId] || { response: "Não respondida", recommendation: "-" };
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${criterion.title}</td>
                    <td>${sub.title}</td>
                    <td>${qText}</td>
                    <td><span class="badge badge-${answer.response}">${answer.response}</span></td>
                    <td>${answer.recommendation || "-"}</td>
                `;
                resultsUI.tableBody.appendChild(row);
            });
        });
    });
}

init();
