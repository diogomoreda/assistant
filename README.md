# Assistant

AI code assistant using local Ollama LLM for:

- discovery
- coding
- testing
- review
- ops

## Models

Ollama local model must be installed

**http://localhost:11434**

### Text generation and conversation endpoints

| Method | Endpoint | Purpose |
|-|-|-|
| POST | /api/generate | Generate text from a prompt |
| POST | /api/chat | Chat using a sequence of messages |
| POST | /api/embed | Generate embeddings for text |
| POST | /api/embeddings | Legacy embedding endpoint |

### Model management endpoints

| Method | Endpoint | Purpose |
|-|-|-|
| GET | /api/tags | List locally available models |
| GET | /api/ps | List models currently loaded in memory |
| POST | /api/show | Inspect model information |
| POST | /api/pull |Download a model |
| POST | /api/create | Create a model from a Modelfile or other supported sources |
| POST | /api/copy | Copy a model under another name |
| POST | /api/delete | Delete a local model |
| POST | /api/push | Push a model to an Ollama model library |
| POST | /api/version | Get the Ollama version |

example:
```bash
curl -s http://localhost:11434/api/tags | jq .
```
