import 'dotenv/config';

export default {
    baseUrl: process.env.N8N_BASE_URL,
    apiKey: process.env.N8N_API_KEY,
    validate() {
        if (!this.baseUrl || !this.apiKey) {
            throw new Error('Missing N8N_BASE_URL or N8N_API_KEY in environment variables.');
        }
    }
};
