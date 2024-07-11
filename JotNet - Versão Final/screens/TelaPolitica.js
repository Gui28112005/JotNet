import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TelaPolitica = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Política de Privacidade</Text>
        <Text style={styles.text}>
          ❗ AVISOS ❗
        </Text>
        <Text style={styles.text}>
          A política de privacidade é o documento pelo qual o responsável por manter um site ou aplicativo explica a todos os interessados a forma como os dados pessoais dos usuários e visitantes da plataforma serão tratados.
        </Text>
        <Text style={styles.text}>
          A adoção do Regulamento Geral de Proteção de Dados da União Europeia (RGPD) levantou o debate sobre a proteção de dados pessoais na “era da internet”. No Brasil, foi elaborada a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/18) que entrou totalmente em vigor em agosto de 2020. Esta norma traz uma série de exigências acerca da coleta, armazenamento e tratamento de dados pessoais de usuários.
        </Text>
        <Text style={styles.text}>
          A plataforma que coleta, armazena e trata dados pessoais de usuários deve informar a todos os interessados quais os dados pessoais coletados, como esses dados são coletados, entre outras informações que devem ser disponibilizadas na política de privacidade.
        </Text>
        <Text style={styles.text}>
          É importante pontuar que:
        </Text>
        <Text style={styles.text}>
          **Política de Privacidade** se refere a informações específicas de coleta, armazenamento e proteção de dados pessoais de usuários de um site ou aplicativo.
        </Text>
        <Text style={styles.text}>
          **Termos e Condições Gerais de Uso** servem para indicar as regras que devem ser respeitadas ao utilizar a plataforma. Ou seja, informam as obrigações e direitos dos usuários, bem como da plataforma, visto que o mesmo serve como uma espécie de contrato de adesão.
        </Text>
        <Text style={styles.text}>
          Assim, compreendendo essa diferença, caso o contrato que se encaixe em sua situação seja o Termos e Condições Gerais de Uso, indicamos que você consulte nosso modelo: Termos e Condições de Uso.
        </Text>
        <Text style={styles.text}>
          Por fim, lembramos que a Política de Privacidade é um documento personalizável, devendo o responsável por sua elaboração atentar para as peculiaridades da sua plataforma, bem como possíveis legislações aplicáveis ao ramo industrial da empresa.
        </Text>
        <Text style={styles.text}>
          SEÇÃO 1 - INFORMAÇÕES GERAIS
        </Text>
        <Text style={styles.text}>
          A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes do aplicativo, com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos os interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.
        </Text>
        <Text style={styles.text}>
          Esta Política de Privacidade aplica-se a todos os usuários e visitantes do aplicativo e integra os Termos e Condições Gerais de Uso do aplicativo.
        </Text>
        <Text style={styles.text}>
          O presente documento foi elaborado em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil da Internet (Lei 12.965/14) e o Regulamento da UE n. 2016/6790. Ainda, o documento poderá ser atualizado em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.
        </Text>
        <Text style={styles.text}>
          SEÇÃO 2 - COMO RECOLHEMOS OS DADOS PESSOAIS DO USUÁRIO E DO VISITANTE?
        </Text>
        <Text style={styles.text}>
          O aplicativo não coleta dados pessoais dos usuários. Todas as informações inseridas pelo usuário, como notas e configurações de gastos, são armazenadas localmente no dispositivo do usuário.
        </Text>
        <Text style={styles.text}>
          SEÇÃO 3 - QUAIS DADOS PESSOAIS RECOLHEMOS SOBRE O USUÁRIO E VISITANTE?
        </Text>
        <Text style={styles.text}>
          Nenhum dado pessoal é coletado pelo aplicativo.
        </Text>
        <Text style={styles.text}>
          SEÇÃO 4 - PARA QUE FINALIDADES UTILIZAMOS OS DADOS PESSOAIS DO USUÁRIO E VISITANTE?
        </Text>
        <Text style={styles.text}>
          Os dados pessoais não são coletados pelo aplicativo. Todas as informações armazenadas localmente são utilizadas exclusivamente para melhorar a experiência do usuário dentro do aplicativo.
        </Text>
        <Text style={styles.text}>
          SEÇÃO 5 - SEGURANÇA DOS DADOS PESSOAIS ARMAZENADOS
        </Text>
        <Text style={styles.text}>
          O aplicativo toma medidas razoáveis para proteger as informações armazenadas localmente contra acesso não autorizado ou uso indevido.
        </Text>
        <Text style={styles.text}>
          SEÇÃO 6 - COMPARTILHAMENTO DOS DADOS
        </Text>
        <Text style={styles.text}>
          Nenhum dado pessoal é compartilhado pelo aplicativo.
        </Text>
        <Text style={styles.text}>
          SEÇÃO 7 - COOKIES OU DADOS DE NAVEGAÇÃO
        </Text>
        <Text style={styles.text}>
          O aplicativo não utiliza cookies ou coleta dados de navegação.
        </Text>
        <Text style={styles.text}>
          SEÇÃO 8 - CONSENTIMENTO
        </Text>
        <Text style={styles.text}>
          Ao utilizar os serviços e fornecer as informações pessoais na plataforma, o usuário está consentindo com a presente Política de Privacidade.
        </Text>
        <Text style={styles.text}>
          SEÇÃO 9 - ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE
        </Text>
        <Text style={styles.text}>
          Reservamos o direito de modificar essa Política de Privacidade a qualquer momento, então, é recomendável que o usuário e visitante revise-a com frequência.
        </Text>
        <Text style={styles.text}>
          SEÇÃO 10 – JURISDIÇÃO PARA RESOLUÇÃO DE CONFLITOS
        </Text>
        <Text style={styles.text}>
          Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro.
        </Text>
        <Text style={styles.text}>
          Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede da empresa.
        </Text>
        <Text style={styles.text}>
          **Contato:** Se tiver dúvidas sobre esta política, entre em contato pelo email: guilhermelopes@gmail.com
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78ad89',
  },
  scrollViewContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
});

export default TelaPolitica;
