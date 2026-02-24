import axios from 'axios';

class N8nClient {
    constructor(config) {
        this.config = config;
        const baseUrl = config.baseUrl.endsWith('/') ? config.baseUrl.slice(0, -1) : config.baseUrl;
        this.client = axios.create({
            baseURL: baseUrl,
            headers: {
                'X-N8N-API-KEY': config.apiKey,
                'Content-Type': 'application/json'
            },
            timeout: 10000
        });
    }

    async get(path) {
        // Automatically try /api/v1 prefix if it fails or just use it
        try {
            const response = await this.client.get(`/api/v1${path}`);
            return response.data;
        } catch (e) {
            const response = await this.client.get(path);
            return response.data;
        }
    }

    async listWorkflows() {
        const data = await this.get('/workflows');
        return data.data || data;
    }

    async getWorkflow(id) {
        return await this.get(`/workflows/${id}`);
    }

    async triggerWorkflow(workflowId, data = {}) {
        return await this.client.post(`/api/v1/workflows/${workflowId}/run`, data);
    }
}

export default N8nClient;
