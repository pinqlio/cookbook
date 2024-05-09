import { defineStorage } from '@aws-amplify/backend';
import { generateMonthlyReports } from '../functions/generate-monthly-reports/resource';

export const storage = defineStorage({
  name: 'myReports',
  access: (allow) => ({
    '/reports/*': [
      allow.resource(generateMonthlyReports).to(['read', 'write', 'delete'])
    ]
  })
});