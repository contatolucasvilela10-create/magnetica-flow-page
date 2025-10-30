import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  Eye,
  Heart,
  Crown,
  CheckCircle2,
  Star,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Zap,
} from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";

const Index = () => {
  const [isCtaFixed, setIsCtaFixed] = useState(false);

  // Fixed CTA button on scroll
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsCtaFixed(window.scrollY > 800);
    });
  }

  const scrollToCta = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 px-4 md:px-6">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Text */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Promoção por Tempo Limitado</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
                Você pode ser linda… mas sem{" "}
                <span className="gradient-text">sex appeal</span>, vai continuar sendo{" "}
                <span className="italic">só a amiga legal.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Descubra como despertar sua sensualidade natural, aumentar sua autoestima e
                atrair olhares — sem mudar quem você é.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">De R$ 97,00</span>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">
                      -51% OFF
                    </span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text">R$ 47,90</div>
                  <p className="text-xs text-muted-foreground">Acesso imediato após o pagamento</p>
                </div>
              </div>

              <Button
                size="xl"
                variant="cta"
                onClick={scrollToCta}
                className="w-full sm:w-auto animate-pulse-glow"
              >
                Quero Despertar Meu Sex Appeal
                <ArrowRight className="ml-2" />
              </Button>

              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>+500 downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src={ebookCover}
                alt="Capa do eBook Desperte Seu Sex Appeal"
                className="relative z-10 w-full max-w-md mx-auto animate-float shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl mb-4">
              O Que Você Vai <span className="gradient-text">Descobrir</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transforme sua presença e desperte sua força interior
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Como ser notada sem mudar o corpo",
                description: "Aprenda técnicas poderosas de presença que fazem você se destacar naturalmente",
              },
              {
                icon: Crown,
                title: "Como transmitir poder sem abrir a boca",
                description: "Domine a linguagem corporal que comunica confiança e atração",
              },
              {
                icon: Sparkles,
                title: "Como vestir-se para ser desejada",
                description: "Descubra o estilo que realça sua personalidade única e sensual",
              },
              {
                icon: Heart,
                title: "Como aumentar sua autoestima em poucos dias",
                description: "Práticas diárias que transformam sua relação consigo mesma",
              },
              {
                icon: Star,
                title: "Como se tornar inesquecível para qualquer homem",
                description: "O segredo das mulheres que deixam marcas profundas",
              },
              {
                icon: Zap,
                title: "Ritual da Mulher Magnética",
                description: "Rotina completa para despertar seu poder de atração todos os dias",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl mb-4">
              O Que Está <span className="gradient-text">Dentro do eBook</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Conteúdo completo e prático para sua transformação
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                chapter: "Capítulo 1",
                title: "O que é sex appeal de verdade",
                description: "Entenda o conceito além dos clichês e descubra sua essência única",
              },
              {
                chapter: "Capítulo 2",
                title: "Linguagem corporal que atrai",
                description: "Gestos, postura e movimentos que transmitem confiança irresistível",
              },
              {
                chapter: "Capítulo 3",
                title: "Autoestima como arma de sedução",
                description: "Como se amar primeiro para ser amada da forma que merece",
              },
              {
                chapter: "Capítulo 4",
                title: "Como se vestir para ser lembrada",
                description: "Guia de estilo para realçar sua personalidade e sensualidade",
              },
              {
                chapter: "Capítulo 5",
                title: "O ritual da mulher magnética",
                description: "Rotina diária completa para manter seu poder de atração sempre ativo",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="text-sm text-primary font-semibold">{item.chapter}</div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-accent/10 border-2 border-accent animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="text-sm text-accent font-bold uppercase tracking-wide">
                      Bônus Exclusivos
                    </div>
                    <h3 className="text-xl font-semibold">Checklist + Afirmações Positivas</h3>
                    <p className="text-muted-foreground">
                      Material extra para acompanhar sua evolução e fortalecer sua mentalidade de
                      mulher poderosa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/50">
        <div className="container max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-primary/20 shadow-[var(--shadow-elegant)] animate-scale-in">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed">
                  "Depois de aplicar só um dos ensinamentos do eBook, um cara que me ignorava
                  começou a me elogiar. Eu me senti{" "}
                  <span className="gradient-text font-bold not-italic">poderosa</span>."
                </blockquote>
                <div>
                  <div className="font-semibold text-lg">Mariana</div>
                  <div className="text-muted-foreground">27 anos</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 px-4 md:px-6 bg-primary/5">
        <div className="container max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <Card className="border-primary/30 hover:border-primary transition-colors animate-fade-in">
              <CardContent className="p-6 flex items-center gap-4">
                <Clock className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Promoção por Tempo Limitado</h3>
                  <p className="text-sm text-muted-foreground">
                    Aproveite o desconto de 51% antes que acabe
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/30 hover:border-accent transition-colors animate-fade-in">
              <CardContent className="p-6 flex items-center gap-4">
                <Users className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Mais de 500 Downloads</h3>
                  <p className="text-sm text-muted-foreground">
                    Centenas de mulheres já estão transformando suas vidas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl mb-4">
              Este eBook é <span className="gradient-text">Pra Você</span> Se...
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Você se sente invisível ou apagada em ambientes sociais",
              "Quer ser mais desejada e admirada sem forçar a barra",
              "Está cansada de se comparar com outras mulheres",
              "Quer aprender a se amar antes de buscar validação externa",
              "Deseja aumentar sua confiança e presença de forma autêntica",
              "Quer entender o poder da sua feminilidade única",
            ].map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/50">
        <div className="container max-w-3xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-accent shadow-[var(--shadow-gold)] animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-gold)]">
                  <Shield className="w-12 h-12 text-accent-foreground" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold">Garantia de 7 Dias</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Experimente o eBook sem riscos. Se em 7 dias você não estiver satisfeita,
                    devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracias.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground text-lg">
              Tire suas dúvidas antes de começar sua transformação
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-border rounded-lg px-6 hover:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                O eBook é físico ou digital?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                É 100% digital! Você recebe o link para download imediatamente após a confirmação do
                pagamento e pode ler no celular, tablet ou computador, quando e onde quiser.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-border rounded-lg px-6 hover:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                Em quanto tempo começo a ver resultado?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Muitas mulheres relatam mudanças na primeira semana! Os exercícios de linguagem
                corporal e autoestima geram resultados rápidos. Mas a transformação completa acontece
                com a prática consistente dos rituais ensinados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-border rounded-lg px-6 hover:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                Preciso estar namorando para aplicar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Não! Na verdade, o eBook é sobre VOCÊ. É sobre despertar sua essência, aumentar sua
                autoestima e presença. Funciona perfeitamente para solteiras, comprometidas ou
                qualquer mulher que queira se sentir mais poderosa e confiante.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-border rounded-lg px-6 hover:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                Como recebo o eBook após o pagamento?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Após a confirmação do pagamento, você recebe um e-mail automático com o link para
                download. O acesso é imediato e vitalício - você pode baixar quantas vezes quiser!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-section" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-primary/5 to-secondary/50">
        <div className="container max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-5xl leading-tight">
            Pronta Para Despertar Seu <span className="gradient-text">Sex Appeal</span>?
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl text-muted-foreground line-through">R$ 97,00</span>
              <span className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-lg font-bold">
                -51% OFF
              </span>
            </div>
            <div className="text-5xl md:text-6xl font-bold gradient-text">R$ 47,90</div>
            <p className="text-muted-foreground">Acesso imediato • Pagamento 100% seguro</p>
          </div>

          <Button
            size="xl"
            variant="cta"
            className="animate-pulse-glow"
            onClick={() => {
              // Aqui você integraria com o sistema de pagamento
              alert("Integração com sistema de pagamento aqui!");
            }}
          >
            Quero Acessar Agora
            <ArrowRight className="ml-2" />
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground pt-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Acesso vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              <span>Bônus inclusos</span>
            </div>
          </div>

          <Card className="mt-12 border-primary/20 max-w-md mx-auto animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 text-left">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Por que R$ 47,90?</p>
                  <p className="text-sm text-muted-foreground">
                    Queremos que toda mulher tenha acesso a esse conhecimento transformador. O
                    investimento é simbólico comparado ao valor da sua autoestima renovada.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Floating CTA Button - Mobile */}
      {isCtaFixed && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border shadow-lg z-50 animate-fade-in md:hidden">
          <Button
            size="lg"
            variant="cta"
            className="w-full"
            onClick={() => {
              alert("Integração com sistema de pagamento aqui!");
            }}
          >
            Comprar Agora - R$ 47,90
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Desperte Seu Sex Appeal. Todos os direitos reservados.</p>
          <p className="mt-2">
            Pagamento 100% seguro • Garantia de 7 dias • Acesso imediato
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
