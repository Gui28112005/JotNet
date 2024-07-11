import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Linking, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Importando ícones FontAwesome5

const TelaSobre = () => {

  const abrirLinkedIn = () => {
    const url = 'https://www.linkedin.com/in/guilherme-lopes-rocetom-3a437a25b';
    Linking.openURL(url);
  };

  const abrirGitHub = () => {
    const url = 'https://github.com/Gui28112005';
    Linking.openURL(url);
  };

  const enviarEmail = () => {
    const email = 'mailto:guilhermedevsistemas@gmail.com';
    Linking.openURL(email);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <ImageBackground 
          source={{ uri: 'https://media.licdn.com/dms/image/D4D16AQHzXizEx7LSKA/profile-displaybackgroundimage-shrink_350_1400/0/1720406422381?e=1726099200&v=beta&t=KtXflkaONBTih6M9CjU89E8l3k0OEZT7gY0EOTjeM68' }} 
          style={styles.backgroundImage}
        >
          <Image 
            source={{ uri: 'https://media.licdn.com/dms/image/D4D35AQE0p0vyV0SBfA/profile-framedphoto-shrink_200_200/0/1720011406357?e=1721181600&v=beta&t=M2V9PcvP2lGMb5X1BwKPVRcd6nC8m3ule9y2e9GPVdk' }} 
            style={styles.avatar} 
          />
        </ImageBackground>
        <View>
          <Text style={styles.jot}>Criador do JotNest</Text>
        </View>
        <Text style={styles.name}>Guilherme Lopes Rocetom</Text>
        <Text style={styles.subtitle}>
          Olá! Meu nome é Guilherme Lopes Rocetom e sou apaixonado pela Tecnologia da Informação, especialmente em desenvolvimento de sistemas e análise de dados. Minha formação inclui um curso técnico em TI pelo Senai São Carlos Antônio Adolpho Lobbe e atualmente estou cursando Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul Virtual.
        </Text>
        <Text style={styles.sectionTitle}>Quem sou eu profissionalmente?</Text>
        <Text style={styles.paragraph}>
          Tenho um grande interesse em Power BI e cibersegurança na nuvem, e estou sempre buscando maneiras de aprimorar minhas habilidades. Sou um entusiasta da cultura DevOps, integrando desenvolvimento e operações para entregar soluções mais eficientes e confiáveis.
        </Text>
        <Text style={styles.sectionTitle}>Minhas principais habilidades incluem:</Text>
        <Text style={styles.skills}>
          - Desenvolvimento de Sistemas: Experiência em programação e análise de sistemas.{"\n"}
          - Análise de Dados com Power BI: Transformação de dados em insights acionáveis.{"\n"}
          - Cibersegurança na Nuvem: Proteção de dados e infraestrutura em ambientes de nuvem.{"\n"}
          - Cultura DevOps: Integração de desenvolvimento e operações para otimização de processos.
        </Text>
        <Text style={styles.sectionTitle}>Soft Skills:</Text>
        <Text style={styles.skills}>
          - 🧠 Criatividade na solução de problemas{"\n"}
          - 🗣️ Comunicação eficaz{"\n"}
          - 👥 Trabalho em equipe{"\n"}
          - 👨‍🏫 Liderança de projetos colaborativos
        </Text>
        <Text style={styles.sectionTitle}>Tecnologias que adquiri em minha formação:</Text>
        <Text style={styles.tech}>
          - ☕ Java{"\n"}
          - 🍃 Spring{"\n"}
          - ⚛️ React Native{"\n"}        
          - 🌐 HTML{"\n"}
          - 🎨 CSS{"\n"}
          - ☁️ Azure{"\n"}
          - 🗃️ SQL Workbench
        </Text>
        <Text style={styles.sectionTitle}>Projetos até o momento:</Text>
        <Text style={styles.projectTitle}>Geo Senai</Text>
        <Text style={styles.paragraph}>
          Jan de 2024 - Jun de 2024: Eu e meus colegas desenvolvemos um totem de autoatendimento que visa facilitar como os alunos novos e veteranos se localizam na escola SENAI Antônio Adolpho Lobbe em São Carlos, São Paulo, utilizando tecnologias como React Native, Java, Spring, GitHub e Azure. Com a ajuda do Geo Senai, os alunos podem encontrar turmas novas, além de novas vagas de emprego, contando com um mapa da escola SENAI com todas as salas.
        </Text>
        <Text style={styles.projectTitle}>Cálculo Novaes</Text>
        <Text style={styles.paragraph}>
          Eu e a minha equipe de aprendizes da empresa Novaes Engenharia desenvolvemos um aplicativo que visa facilitar a maneira como os cálculos hidráulicos são feitos, pensado para o funcionário(a) que está no campo ou no escritório. O Cálculo Novaes ajuda a realizar cálculos usados com muita frequência na hidráulica.
        </Text>
        <Text style={styles.projectTitle}>JotNest</Text>
        <Text style={styles.paragraph}>
        Mantenha suas tarefas em ordem e seus compromissos bem organizados com o JotNest. Nossa aplicação oferece telas dedicadas para cada aspecto da sua vida, permitindo que você registre e gerencie todos os seus compromissos de forma prática e eficiente.Precisa organizar suas visitas a restaurantes, lanchonetes ou pizzarias? Sem problemas! Com o JotNest, você tem uma tela exclusiva para registrar todos os detalhes dos seus compromissos em cada tipo de local. Quer seja para compromissos profissionais, eventos sociais ou atividades de lazer, cada tarefa e compromisso tem seu próprio espaço dedicado.Nossa interface intuitiva facilita a organização, garantindo que você nunca perca um compromisso importante. Experimente o JotNest e descubra como é fácil manter tudo em ordem e à mão!
        </Text>
        <Text style={styles.textValorizo}>O que eu valorizo:</Text>
        <Text style={styles.paragraph}>
          Valorizo a criatividade e a comunicação eficaz na solução de problemas, e tenho facilidade para trabalhar em equipe e liderar projetos colaborativos. Resido em São Carlos, SP, e estou sempre em busca de novas oportunidades para aplicar e expandir meu conhecimento em TI e DevOps.
        </Text>
        
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={abrirLinkedIn}>
          <FontAwesome5 name="linkedin" size={24} color="#0077B5" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={abrirGitHub}>
          <FontAwesome5 name="github" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={enviarEmail}>
          <FontAwesome5 name="envelope" size={24} color="#EA4335" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: 'white',
    marginBottom: -75,
    marginTop: 75,
    left: -126,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 45,
    left: -25,
  },
  textValorizo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 45,
    left: -25,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'medium',
    marginBottom: 10,
    textAlign:'left',
    marginTop: 17,
    color: 'black',
    marginLeft: 3,
  },
  jot: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'green',
    marginBottom: 10,
    marginTop: 42,
    left:75,
  },
  projectTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 42,
  },
  contact: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 42,
    color: 'black',
    marginLeft: 17,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  intro: {
    marginBottom: 15,
    marginHorizontal: 10,
    left: 40,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 15,
    textAlign: 'left',
  },
  skills: {
    marginBottom: 15,
    textAlign: 'left',
    marginLeft: 10,
  },
  tech: {
    marginBottom: 15,
    textAlign: 'left',
    marginLeft: 25,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
  },
});

export default TelaSobre;
