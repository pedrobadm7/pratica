// Classe base Funcionario
class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
  }

  trabalhar() {
    return `${this.nome} está trabalhando.`;
  }
}

// Classe Gerente herdando de Funcionario
class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
  }
}

// Classe Desenvolvedor herdando de Funcionario
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    return `${this.nome} está programando em ${this.linguagem}.`;
  }
}

// Função para exibir erro
function exibirErro(mensagem) {
  document.getElementById("erro").innerText = mensagem;
}

// Função para criar instâncias e manipular DOM
function criarFuncionario() {
  try {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const linguagem = document.getElementById("linguagem").value;

    if (!nome || !idade || !cargo) {
      throw new Error("Preencha todos os campos obrigatórios.");
    }

    let funcionario;

    if (cargo === "gerente") {
      if (!departamento) {
        throw new Error("Preencha o campo departamento para gerentes.");
      }
      funcionario = new Gerente(nome, idade, cargo, departamento);
    } else if (cargo === "desenvolvedor") {
      if (!linguagem) {
        throw new Error("Preencha o campo linguagem de programação para desenvolvedores.");
      }
      funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
    }

    document.getElementById("resultado").innerText =
      funcionario.seApresentar() + "\n" + (funcionario.gerenciar ? funcionario.gerenciar() : funcionario.programar());

    exibirErro(""); // Limpa mensagem de erro
  } catch (error) {
    exibirErro(error.message);
  }
}

// Mostrar campos específicos baseados no cargo selecionado
document.getElementById("cargo").addEventListener("change", function () {
  const cargoSelecionado = this.value;
  if (cargoSelecionado === "gerente") {
    document.getElementById("campoDepartamento").style.display = "block";
    document.getElementById("campoLinguagem").style.display = "none";
  } else if (cargoSelecionado === "desenvolvedor") {
    document.getElementById("campoDepartamento").style.display = "none";
    document.getElementById("campoLinguagem").style.display = "block";
  } else {
    document.getElementById("campoDepartamento").style.display = "none";
    document.getElementById("campoLinguagem").style.display = "none";
  }
});
