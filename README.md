### Para a implementação local basta clonar o repositório em sua máquina e executar os seguintes comandos:

    criar o arquivo .env e adicionar as variaveis de ambiente da .env.example
        EX:
        POSTGRES_HOST=postgres
        PORT=3001
        POSTGRES_USER=nome_usuario
        POSTGRES_PASSWORD=senha
        POSTGRES_DB=nome_da_db
        SECRET_KEY=qualquer_coisa

    docker-compose up --build

    espere finalizar buildar o front e o back
    e vizualizar as messagens 'servidor executando na porta 3000' para o front e
    'servidor execuntando na porta 3001' para o back
    após tudo estar sendo executado...

    para acessar o frontend acesse http://localhost:3000/

### Rotas da aplicação:

    - POST /users

    Rota para criação de um usuário

    username - Deve ser uma string, campo obrigatório;
    password - Deve ser uma string, campo obrigatório;

    #### Exemplo de requisição:
        {
        "username": "Daniel Bomtempo",
        "password": "1234"
        }

    #### Retorno esperado:
        {
        "id": "902d68bf-9842-4a64-b4de-49cf55466391",
        "username": "Daniel Bomtempo",
        "accounts": {
    	    "id": "f94f2838-ac84-4486-953d-0d92aee5935e",
    	    "balance": 100,
    	    "transaction_debitedAccount": [],
    	    "transaction_creditedAccount": []
            }
        }

    - GET /users

    Rota para listar o usuário logado

    Deve retornar os dados do usuário logado
    Esta rota precisa de um token de autenticação

    #### Retorno esperado:
        {
        "id": "61cd623b-7bf6-402b-b060-c79203c3eea1",
        "username": "teste no inso",
        "accounts": {
    	    "id": "89527817-0235-422a-a588-aa9a744e3363",
    	    "balance": 100,
    	    "transaction_debitedAccount": [
    		    {
    			"id": "9bc754e0-d392-4290-8795-8a0b1269c398",
    			"value": 20,
    			"createdAt": "2022-11-20T20:26:04.846Z"
    		    },
    		    {
    			"id": "182b7712-3526-4797-b580-9ce6851dbce2",
    			"value": 60,
    			"createdAt": "2022-11-20T20:25:49.080Z"
    		    }
    	    ],
    	    "transaction_creditedAccount": []
            }
        }

    - GET /users/all

    Rota para listar todos usuários

    Deve retornar uma lista com todos os usuário cadastrados
    Esta rota precisa de um token de autenticação

    #### Retorno esperado:
    [
        {
            "id": "b3f56a32-f030-41cc-a756-0247165d4ee4",
            "username": "wigo@email.com",
            "accounts": {
                "id": "21960262-de9d-47de-9bd5-724ea1dfce14",
                "balance": 100,
                "transaction_debitedAccount": [],
                "transaction_creditedAccount": [
                    {
                        "id": "5a8242db-6ef5-4c73-a1f6-346a24db94ec",
                        "value": 80,
                        "createdAt": "2022-11-16T17:26:41.866Z"
                    },
                    {
                        "id": "27e000f0-5593-402e-bba9-a3380791ffd1",
                        "value": 10,
                        "createdAt": "2022-11-16T19:19:14.112Z"
                    }
                ]
            }
        },
        {
            "id": "c458a13f-1477-457d-89e8-49d622721f13",
            "username": "jose@email.com",
            "accounts": {
                "id": "af0bfdfc-a7c9-4dcb-8573-3fda82045933",
                "balance": 100,
                "transaction_debitedAccount": [],
                "transaction_creditedAccount": [
                    {
                        "id": "eed23633-faed-4176-a508-2debe6029a84",
                        "value": 10,
                        "createdAt": "2022-11-16T19:20:45.898Z"
                    }
                ]
            }
        }
    ]



    - POST /users/login

    Rota de login do usuário

    email - deve ser uma string, campo obrigatório
    password - deve ser uma string, campo obrigatório
    Deve realizar o login de um usuario cadastrado
    Deve apresentar um login e um email válido

    #### Retorno experado

    Status 200

    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmllbC5ib210ZW1wby5zbUBnbWFpbC5jb20iLCJpYXQiOjE2NjgwMTQ2NTcsImV4cCI6MTY2ODEwMTA1Nywic3ViIjoiMTc5MjRlODEtNWEwYy00Mjc0LWJkNDQtMDEzNzRlNDUxODc3In0._5ueH_dloxZvhbfOwOGK9jIeSzfgSqxN4qJQSkFs-Nc"
    }

    - POST /transactions

    Rota para requisitar uma transação

    value - Deve ser um number, campo obrigatório;
    debitedAccountId - Deve ser uma string, campo obrigatório;
    creditedAccountId - Deve ser uma string, campo obrigatório;
    Esta rota precisa de um token de autenticação

    #### Exemplo de requisição:
        {
            "value": 20,
            "debitedAccountId": "89527817-0235-422a-a588-aa9a744e3363",
            "creditedAccountId": "5b7f49bf-b4f0-4321-ab90-a972992a48be"
        }

    #### Retorno esperado:
        {
            "id": "9bc754e0-d392-4290-8795-8a0b1269c398",
            "value": 20,
            "createdAt": "2022-11-20T20:26:04.846Z"
        }

    - GET /transactions

    Rota para listar todas requisiçoes de transaçoes

    Deve retornar uma lista com todas requisições de transações cadastradas
    Esta rota precisa de um token de autenticação

    #### Retorno esperado:
    [
        {
            "id": "9bc754e0-d392-4290-8795-8a0b1269c398",
            "value": 20,
            "createdAt": "2022-11-20T20:26:04.846Z"
        },
        {
            "id": "182b7712-3526-4797-b580-9ce6851dbce2",
            "value": 60,
            "createdAt": "2022-11-20T20:25:49.080Z"
        }
    ]

    - GET /transactions/cashout

    Rota para listar todas requisiçoes de transaçoes feitas pelo usuario logado

    Deve retornar uma lista com todas requisições de transações feitas pelo usuario logado
    Esta rota precisa de um token de autenticação

    #### Retorno esperado:
    [
        {
            "id": "9bc754e0-d392-4290-8795-8a0b1269c398",
            "value": 20,
            "createdAt": "2022-11-20T20:26:04.846Z"
        },
        {
            "id": "182b7712-3526-4797-b580-9ce6851dbce2",
            "value": 60,
            "createdAt": "2022-11-20T20:25:49.080Z"
        }
    ]

    - GET /transactions/cashin

    Rota para listar todas requisiçoes de transaçoes recebidas pelo usuario logado

    Deve retornar uma lista com todas requisições de transações recebidas pelo usuario logado
    Esta rota precisa de um token de autenticação

    #### Retorno esperado:
    [
        {
            "id": "9bc754e0-d392-4290-8795-8a0b1269c398",
            "value": 20,
            "createdAt": "2022-11-20T20:26:04.846Z"
        },
        {
            "id": "182b7712-3526-4797-b580-9ce6851dbce2",
            "value": 60,
            "createdAt": "2022-11-20T20:25:49.080Z"
        }
    ]
