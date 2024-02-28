## **Business Requirements**

## Cadastro de usuário

- [ ]  Não deve ser possível cadastrar um usuário com email igual a outro usuário
- [ ]  O cadastro de um usuário admin deve ser somente cadastrado via seed
- [ ]  O id do usuário tem que ser do tipo uuid v4
- [ ]  O usuário deve pertencer a uma organização ou não
- [ ]  A senha do user deve estar cripgrafada
- [ ]  Todo usuário deve ter um  ou mais endereços
- [ ]  O avatar do usuário não é obrigatório
- [ ]  Qualquer pessoa física pode criar uma conta
- [ ]  o user pode ter a opção de criar um user via email microsoft ou google
- [ ]  Se o usuário criar uma conta pela google ou microsoft deve ser criado uma senha
- [ ]  O usuário, ao criar uma conta, deve confirmar a criação da mesma através de seu email.
- [ ]  deve ter um campo se o usuário está ativo ou inativo

### Listar Usuário

- [ ]  ao listar o usuário a senha dele não pode estar exposta na resposta
- [ ]  Somente o user que pertence a uma organização pode  pode listar todos os usuários(authenticated)
- [ ]  Somente o usuario com regra de adimin pode listar usuários deletar usuários pertencentes a organizações.

## Atualizar Usuário

- [ ]  Qualquer usuário tem permissão de alterar o seu nome, avatar e endereço
- [ ]  Deve haver uma rota para atualizar o avatar do usuário.
- [ ]  Deve ter uma rota para atualizar as regras e permissões ao usuário pertencente a uma organização. Essa rota só pode ser feita a um owner admin.
- [ ]  se o usuário for atualiado deve ser salvo a data dessa modificaçao

### Cadastro de Permissões e Regras

- [ ]  A regra de Admin ou manager deve ser criado somente por seed
- [ ]  As novas regras e permissoes só devem ser cadastradas pelo user admin ou manager
- [ ]  O admin ou manager tem todas as permissões do sistema

# Proprietário ou Loja

## Cadastro de Proprietário

- [ ]  Todo proprietário deve ter um cnpj validado e único
- [ ]  Todo proprietario deve ter uma reputação
- [ ]  O proprietario só poderar ser cadastrado pelo admin do sistema
- [ ]  Todo proprietario deve ter um endereço
- [ ]  O proprietario deve ter um nome
- [ ]  Ao cadastrar um proprietario deve ser salva a data desse cadastro
- [ ]  O proprietario deve ser admin por padrao

## Listar Deletar e Desativar Proprietario ou Loja

- [ ]  Somente o admin do sistema pode listar os proprietarios
- [ ]  Somente o admin pode deletar ou ativar algum proprietario

# Produto e Categoria

- [ ]  Toda categoria deve ter nome descrição e pertencer há um produto
- [ ]  todo produto deve ter obrigatoriamente nome, descrição, price, marca, avatar, estoque.
- [ ]  Todo produto pode pertencer a n lojas

# Endereço

- [ ]  Deve ser criado uma seed para cadastrar os endereçoes do país
- [ ]  O endereço deve pertencer a um estado pertencente ao Brasil
- [ ]  Todo endereço deve ter rua, bairro, cidade, cep, complemento e número
- [ ]  O complemento é um campo opcional.