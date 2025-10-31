# 🧪 Guia de Configuração de Testes

## Estratégia de Testes Recomendada

### 1. Pirâmide de Testes

```
                    🔺
                /       \
           E2E Tests    (Poucos)
         /               \
    Integration Tests    (Alguns)
   /                     \
Unit Tests              (Muitos)
```

### 2. Ferramentas Recomendadas

#### Unit Tests & Integration Tests

- **Jest** - Framework principal de testes
- **React Native Testing Library** - Para testar componentes React Native
- **@testing-library/jest-native** - Matchers específicos para RN

#### E2E Tests

- **Detox** - Para testes end-to-end em React Native
- **Maestro** - Alternativa mais simples ao Detox

#### Mocking & Utilities

- **MSW (Mock Service Worker)** - Para mock de APIs
- **@expo/jest-preset-expo** - Preset do Jest para Expo

### 3. Configuração para Instalação Futura

#### Dependências a instalar:

```bash
# Core testing
npm install --save-dev jest @types/jest

# React Native Testing
npm install --save-dev @testing-library/react-native @testing-library/jest-native

# Expo Testing
npm install --save-dev @expo/jest-preset-expo

# Mocking
npm install --save-dev msw

# E2E (Opcional)
npm install --save-dev detox
# ou
npm install --save-dev @maestro/cli
```

#### Scripts a adicionar no package.json:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "detox test",
    "test:e2e:build": "detox build",
    "test:maestro": "maestro test"
  }
}
```

### 4. Estrutura de Pastas para Testes

```
src/
├── modules/
│   └── shared/
│       ├── components/
│       │   ├── __tests__/
│       │   │   ├── ExternalLink.test.tsx
│       │   │   └── ThemedText.test.tsx
│       │   └── index.ts
│       ├── hooks/
│       │   ├── __tests__/
│       │   │   └── useColorScheme.test.ts
│       │   └── index.ts
│       └── services/
│           ├── __tests__/
│           └── index.ts
└── __tests__/
    ├── __mocks__/
    ├── helpers/
    └── setup.ts

e2e/
├── tests/
├── helpers/
└── config/
```

### 5. Configurações Iniciais

#### jest.config.js

```javascript
module.exports = {
  preset: '@expo/jest-preset-expo',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts'],
  testMatch: ['**/__tests__/**/*.(ts|tsx|js)', '**/*.(test|spec).(ts|tsx|js)'],
  collectCoverageFrom: [
    'src/**/*.(ts|tsx)',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/**/*.(test|spec).(ts|tsx)',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/shared/(.*)$': '<rootDir>/src/modules/shared/$1',
  },
};
```

### 6. Padrões de Teste

#### Componentes

- Testar renderização
- Testar interações do usuário
- Testar props e estados
- Testar acessibilidade

#### Hooks

- Testar valores retornados
- Testar mudanças de estado
- Testar efeitos colaterais

#### Services

- Testar chamadas de API
- Testar tratamento de erros
- Testar transformações de dados

### 7. Exemplo de Teste

```typescript
// ExternalLink.test.tsx
import { render, fireEvent } from '@testing-library/react-native';
import { ExternalLink } from '../ExternalLink';

describe('ExternalLink', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ExternalLink href="https://example.com">Test Link</ExternalLink>
    );

    expect(getByText('Test Link')).toBeTruthy();
  });

  it('handles press correctly', () => {
    const { getByText } = render(
      <ExternalLink href="https://example.com">Test Link</ExternalLink>
    );

    const link = getByText('Test Link');
    fireEvent.press(link);

    // Verificar se a URL foi aberta
  });
});
```

### 8. Métricas de Cobertura Recomendadas

- **Statements:** > 80%
- **Branches:** > 75%
- **Functions:** > 80%
- **Lines:** > 80%

### 9. Integração com CI/CD

Os testes devem ser executados automaticamente no pipeline:

- Unit tests em todos os PRs
- E2E tests apenas em releases
- Cobertura de código reportada
