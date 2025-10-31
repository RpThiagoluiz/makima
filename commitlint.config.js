module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // ✨ Nova funcionalidade
        'fix', // 🐛 Correção de bug
        'docs', // 📚 Documentação
        'style', // 💄 Formatação, sem mudança de lógica
        'refactor', // ♻️ Refatoração de código
        'perf', // ⚡ Melhoria de performance
        'test', // 🧪 Adição ou correção de testes
        'build', // 🔧 Mudanças no build ou dependências
        'ci', // 👷 Mudanças na CI/CD
        'chore', // 🔨 Tarefas de manutenção
        'revert', // ⏪ Reverter commit
      ],
    ],
    'subject-max-length': [2, 'always', 72],
    'subject-min-length': [2, 'always', 10],
    'subject-case': [2, 'always', 'lower-case'],
    'body-max-line-length': [2, 'always', 100],
  },
};
