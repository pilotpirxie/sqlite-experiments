import Fastify, {FastifyRequest} from 'fastify';
import sqlite3 from 'better-sqlite3';

const db = sqlite3(':memory:');
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP);`);

const fastify = Fastify({
    logger: true
});

fastify.get('/users', async (request, reply) => {
    return db.prepare('SELECT * FROM users').all();
});

fastify.post('/users', async (request: FastifyRequest<{ Body: { name: string, email: string }  }>, reply) => {
    const { name, email } = request.body;

    const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
    const result = stmt.run(name, email);
    return { id: result.lastInsertRowid, name, email };
});

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
});