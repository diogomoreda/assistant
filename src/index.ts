import cli from './services/cli.js';

// cli runs the interface between user and model
await cli().catch(console.error);
