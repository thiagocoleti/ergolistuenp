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
    tablesContainer: document.getElementById('results-tables-container'),
    newBtn: document.getElementById('new-inspection-btn'),
    printBtn: document.getElementById('print-btn'),
    jsonBtn: document.getElementById('download-json-btn'),
    csvBtn: document.getElementById('download-csv-btn')
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
    resultsUI.jsonBtn.addEventListener('click', () => downloadResults('json'));
    resultsUI.csvBtn.addEventListener('click', () => downloadResults('csv'));
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
                `;
                
                // Add events to options
                const btns = qDiv.querySelectorAll('.option-btn');
                btns.forEach(btn => {
                    btn.addEventListener('click', () => handleAnswer(qId, btn.dataset.value, btns, qDiv));
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
    
    // Update State
    state.answers[qId] = {
        response: value
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
    // Requirements: Not mandatory to answer all questions.
    // Proceed directly to results.
    renderResults();
    showScreen('results');
}


function renderResults() {
    resultsUI.appName.textContent = state.appName;
    resultsUI.appType.textContent = state.appType;
    
    // Stats
    const answeredCount = Object.values(state.answers).filter(a => a.response !== "Não Respondido").length;
    const skipCount = state.totalQuestions - answeredCount;
    const percentAnswered = Math.round((answeredCount / state.totalQuestions) * 100);
    
    resultsUI.statsContainer.innerHTML = `
        <div class="stat-card">
            <span class="stat-value">${state.totalQuestions}</span>
            <span class="stat-label">Total de Questões</span>
        </div>
        <div class="stat-card">
            <span class="stat-value">${percentAnswered}%</span>
            <span class="stat-label">Taxa de Resposta</span>
        </div>
        <div class="stat-card">
            <span class="stat-value">${answeredCount}</span>
            <span class="stat-label">Respondidas</span>
        </div>
        <div class="stat-card">
            <span class="stat-value" style="color: #f57f17;">${skipCount}</span>
            <span class="stat-label">Não Respondidas</span>
        </div>
    `;

    
    // Tables
    resultsUI.tablesContainer.innerHTML = '';
    
    criteriaData.forEach((criterion, cIdx) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        wrapper.innerHTML = `<h3>${criterion.title}</h3>`;
        
        const tableResponsive = document.createElement('div');
        tableResponsive.className = 'table-responsive';
        
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Critério</th>
                    <th>Subcritério</th>
                    <th>Questão</th>
                    <th>Resposta</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot></tfoot>
        `;
        
        const tbody = table.querySelector('tbody');
        const tfoot = table.querySelector('tfoot');
        
        let critSim = 0, critNao = 0, critNA = 0, critNR = 0;

        criterion.subcriteria.forEach((sub, sIdx) => {
            sub.questions.forEach((qText, qIdx) => {
                const qId = `${cIdx}-${sIdx}-${qIdx}`;
                const answer = state.answers[qId] || { response: "Não Respondido" };
                
                if (answer.response === "Sim") critSim++;
                else if (answer.response === "Não") critNao++;
                else if (answer.response === "NA") critNA++;
                else critNR++;
                
                const row = document.createElement('tr');
                // Clean label for badge
                const badgeClass = answer.response.replace(/\s+/g, '-');
                row.innerHTML = `
                    <td>${criterion.title}</td>
                    <td>${sub.title}</td>
                    <td>${qText}</td>
                    <td><span class="badge badge-${badgeClass}">${answer.response}</span></td>
                `;
                tbody.appendChild(row);
            });
        });

        // Add Totalizer Row
        const footerRow = document.createElement('tr');
        footerRow.className = 'totalizer-row';
        footerRow.innerHTML = `
            <td colspan="3" style="text-align: right;">Total para ${criterion.title}:</td>
            <td>
                <div class="stat-group">
                    <span class="stat-item stat-sim">Sim: ${critSim}</span>
                    <span class="stat-item stat-nao">Não: ${critNao}</span>
                    <span class="stat-item stat-na">N/A: ${critNA}</span>
                    <span class="stat-item stat-nao-respondido">N/R: ${critNR}</span>
                </div>
            </td>
        `;
        tfoot.appendChild(footerRow);

        
        tableResponsive.appendChild(table);
        wrapper.appendChild(tableResponsive);
        resultsUI.tablesContainer.appendChild(wrapper);
    });
}

function downloadResults(type) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const fileName = `ErgoList_${state.appName.replace(/\s+/g, '_')}_${timestamp}`;
    
    if (type === 'json') {
        const dataStr = JSON.stringify(state, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        triggerDownload(blob, `${fileName}.json`);
    } else if (type === 'csv') {
        const csvRows = [
            ['Critério', 'Subcritério', 'Questão', 'Resposta'].join(',')
        ];
        
        criteriaData.forEach((criterion, cIdx) => {
            criterion.subcriteria.forEach((sub, sIdx) => {
                sub.questions.forEach((qText, qIdx) => {
                    const qId = `${cIdx}-${sIdx}-${qIdx}`;
                    const answer = state.answers[qId] || { response: "Não Respondido" };
                    // Escape commas and quotes for CSV
                    const escape = (text) => `"${text.replace(/"/g, '""')}"`;
                    csvRows.push([
                        escape(criterion.title),
                        escape(sub.title),
                        escape(qText),
                        escape(answer.response)
                    ].join(','));
                });
            });
        });
        
        const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
        triggerDownload(blob, `${fileName}.csv`);
    }
}

function triggerDownload(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

init();

