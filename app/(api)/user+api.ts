import { neon } from '@neondatabase/serverless';


export async function POST(request: Request) {
    try {
        const sql = neon(`${process.env.DATABASE_URL}`);
        const { email, password, clerkId } = await request.json();

        if(!email || !password || !clerkId) {
            return Response.json(
                { error: 'Missing required fields'}, 
                { status: 400 }
            );
        }

        const response = await sql`
            INSERT INTO users (email, password, clerkId)
            VALUES (${email}, ${password}, ${clerkId})
        `;

        return new Response(JSON.stringify({data: response}), { status: 200 });
        
    } catch (error) {
        console.log(error);
        return Response.json({error: error}, { status: 500 });
    }
}

// See https://neon.tech/docs/serverless/serverless-driver
// for more information