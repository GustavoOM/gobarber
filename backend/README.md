# Recuperação de senha

**Requisitos Funcionais**
    - O usuário deve poder recuperar sua senha informando o seu email;
    - O usuário deve receber um e-email com instruções de recuperação de senha;
    - O usuário deve poder resetar sua senha;

**Requisitos não Funcionais**
    - Utilizar Mailtrap para testar envio em ambiente de dev;
    - Utilizar Amazon SES para envios em produção;
    - O envio de e-mails deve acontecer em segundo plano (background job)

**Regras de negócia**
    - O link enviado por email para resetar senha, deve expirar em 2h;
    - O usuário precisa confirmar a nova senha ao resetar sua senha;


# Atualização do perfil

**Requisitos Funcionais**
    - O usuário deve poder atualizar seu nome, email e senha

**Regras de negócia**
    - O usuário não pode alterar seu email para um email já utilizado;
    - Para atualizar sua senha, o usuário deve informar a senha antiga 
    - Para atualizar sua senha, o usuário precisa confirmar a nova senha 

# Painel do prestador

**Requisitos Funcionais**
    - O usuário deve poder listar seus agendamentos de um dia específico
    - O prestador deve receber uma notificação sempre que houver um novo agendamento
    - O prestador deve poder visualizar as notificações não lidas 

**Requisitos não Funcionais**

    - Os agendamentos do prestador no dia devem ser armazenado em cache
    - As notificações do prestador devem ser armazenados no MongoDB
    - As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io


**Regras de negócia**
    - A notificação deve ter um status de lida ou não lida para que o prestador possa

# Agendamento de serviçoes

**Requisitos Funcionais**
    - O usuário deve poder listar todos os prestadores de serviço cadastrados;
    - O usuário deve poder listar o dia de um mês com pelo menos disponível de um prestador;
    - O usuário deve poder listar os horários disponíveis num dia específico de um prestador;
    - O usuário deve poder realizar o um novo agendamento com um prestador;

**Requisitos não Funcionais**

    - A listagem de prestadores deve ser armazenado em cache


**Regras de negócia**
    - Cada agentamento deve durar 1h exatamente;
    - Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h)
    - O usuário não pode agendar em um horário já ocupado
    - O usuário não pode agendar em um horário que já passou
    - O usuário não pode agendar serviços consigo mesmo