import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Heart,
  Sparkles,
  Star,
  Eye,
  Crown,
  Zap,
  Shield,
  CheckCircle2,
  Gift,
} from "lucide-react";
import ebookCover from "@/assets/ebook-cover-final.png";
import { useState, useEffect } from "react";

const Index = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-final");
    ctaSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed CTA Button */}
      {isFixed && (
        <div className="fixed top-4 left-0 right-0 z-50 px-4 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <Button
              onClick={scrollToCTA}
              size="lg"
              variant="cta"
              className="w-full shadow-[var(--shadow-glow)] animate-pulse-glow"
            >
              💋 Quero ativar meu sex appeal agora!
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 px-4">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border-2 border-primary/30 shadow-[var(--shadow-elegant)] animate-bounce-slow">
              <Sparkles className="w-5 h-5 text-primary animate-shimmer" />
              <span className="font-semibold text-sm uppercase tracking-wide gradient-text-rose">
                Promoção de Lançamento
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
              Você pode ser linda…{" "}
              <span className="gradient-text-rose text-shadow-glow">
                mas sem sex appeal
              </span>
              , vai continuar sendo só a{" "}
              <span className="italic">amiga legal</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubra como despertar sua sensualidade natural, aumentar sua
              autoestima e atrair olhares — sem mudar quem você é.
            </p>

            {/* eBook Mockup with 3D Effect */}
            <div className="py-8 md:py-12 animate-scale-in">
              <div className="relative inline-block">
                <div
                  className="absolute inset-0 blur-3xl opacity-50 animate-pulse-slow"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(var(--cherry-red) / 0.4), hsl(var(--rose-gold) / 0.3))",
                  }}
                />
                <img
                  src={ebookCover}
                  alt="Capa do eBook Desperte Seu Sex Appeal"
                  className="relative w-64 md:w-80 lg:w-96 mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-float"
                  style={{
                    filter: "drop-shadow(0 20px 40px hsl(var(--cherry-red) / 0.4))",
                  }}
                />
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl text-muted-foreground line-through">
                  R$97,00
                </span>
                <span className="text-5xl md:text-6xl font-bold gradient-text-rose text-shadow-glow">
                  R$47,90
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                ou em até{" "}
                <span className="font-bold text-accent">
                  12x de R$5,33 no cartão
                </span>
              </p>
            </div>

            {/* CTA Button */}
            <Button
              size="xl"
              variant="cta"
              onClick={scrollToCTA}
              className="shadow-[var(--shadow-glow)] animate-pulse-glow text-base md:text-lg"
            >
              💋 Quero ativar meu sex appeal agora!
            </Button>

            <p className="text-sm text-muted-foreground">
              🔒 Acesso imediato após confirmação do pagamento
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12 md:mb-16">
            O que você vai{" "}
            <span className="gradient-text-rose">descobrir</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Eye,
                title: "Como ser notada",
                description:
                  "Mesmo sem mudar o corpo, aprenda a despertar atenção genuína",
              },
              {
                icon: Zap,
                title: "Linguagem corporal sedutora",
                description:
                  "Gestos, postura e presença que atraem naturalmente",
              },
              {
                icon: Crown,
                title: "Autoestima forte",
                description:
                  "Use sua confiança interior como arma de sedução",
              },
              {
                icon: Sparkles,
                title: "Presença marcante",
                description:
                  "Desenvolva magnetismo pessoal e seja inesquecível",
              },
              {
                icon: Star,
                title: "Ritual diário",
                description:
                  "Práticas simples da mulher poderosa e magnética",
              },
              {
                icon: Gift,
                title: "Bônus exclusivos",
                description: "Checklist + áudio de afirmações positivas",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="w-12 h-12 md:w-14 md:h-14 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative p-8 md:p-12 border-2 border-primary/30 shadow-[var(--shadow-elegant)] overflow-hidden animate-scale-in">
            <div
              className="absolute top-0 left-0 w-32 h-32 opacity-10"
              style={{
                background: "var(--gradient-rose)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
              style={{
                background: "var(--gradient-gold)",
              }}
            />

            <div className="relative">
              <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary mb-6 mx-auto animate-pulse-slow" />

              <blockquote className="text-xl md:text-3xl font-serif italic text-center mb-6 leading-relaxed">
                "Depois de aplicar só um dos ensinamentos, um cara que me
                ignorava começou a me elogiar. Eu me senti{" "}
                <span className="gradient-text-rose font-bold not-italic">
                  PODEROSA
                </span>
                ."
              </blockquote>

              <p className="text-center text-muted-foreground text-lg">
                — Mariana, 27 anos
              </p>

              <div className="flex justify-center gap-1 mt-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 fill-accent text-accent"
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Content Section - Interactive Accordion */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">
            O que tem dentro do{" "}
            <span className="gradient-text-rose">eBook</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            5 capítulos transformadores + bônus exclusivos
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                value: "cap1",
                title: "Capítulo 1: O que é sex appeal de verdade",
                description:
                  "Desconstrua mitos e entenda o que realmente desperta desejo e admiração. Não tem a ver com perfeição física — mas com energia.",
              },
              {
                value: "cap2",
                title: "Capítulo 2: Linguagem corporal sedutora",
                description:
                  "Aprenda gestos, posturas e micro expressões que comunicam confiança, mistério e sensualidade de forma natural.",
              },
              {
                value: "cap3",
                title: "Capítulo 3: Autoestima inabalável",
                description:
                  "Técnicas práticas para fortalecer sua autoestima de dentro para fora e irradiar segurança em qualquer ambiente.",
              },
              {
                value: "cap4",
                title: "Capítulo 4: Estilo que encanta",
                description:
                  "Como se vestir para expressar sua personalidade e ser lembrada — sem precisar mostrar demais.",
              },
              {
                value: "cap5",
                title: "Capítulo 5: O ritual da mulher magnética",
                description:
                  "Rotina diária de práticas mentais, físicas e emocionais para manter seu poder pessoal sempre ativo.",
              },
              {
                value: "bonus",
                title: "🎁 Bônus Exclusivos",
                description:
                  "Checklist prático para aplicar no dia a dia + áudio guiado de afirmações poderosas para fortalecer sua autoestima.",
              },
            ].map((chapter) => (
              <AccordionItem
                key={chapter.value}
                value={chapter.value}
                className="border-2 border-border hover:border-primary/50 rounded-lg px-6 transition-all duration-300 bg-background"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold hover:text-primary">
                  {chapter.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {chapter.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">
            Este eBook é{" "}
            <span className="gradient-text-rose">perfeito para você</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Se você se identifica com alguma dessas situações:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                text: "Se sente apagada ou invisível em ambientes sociais",
                icon: Eye,
              },
              {
                text: "Quer ser mais desejada e valorizada",
                icon: Heart,
              },
              {
                text: "Está cansada de correr atrás de atenção",
                icon: Zap,
              },
              {
                text: "Quer se amar primeiro e dominar qualquer ambiente",
                icon: Crown,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 flex items-start gap-4 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency & Scarcity */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 text-center border-2 border-primary/50 shadow-[var(--shadow-elegant)] animate-pulse-slow">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-2 gradient-text">
                Oferta por tempo limitado
              </h3>
              <p className="text-muted-foreground">
                Preço promocional de lançamento válido apenas esta semana
              </p>
            </Card>

            <Card className="p-8 text-center border-2 border-accent/50 shadow-[var(--shadow-gold)] animate-pulse-slow">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-2">
                Mais de{" "}
                <span className="gradient-text-rose">500 mulheres</span>
              </h3>
              <p className="text-muted-foreground">
                Já desbloquearam sua nova versão com este guia
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="relative p-8 md:p-12 text-center border-2 border-accent/50 shadow-[var(--shadow-gold)] overflow-hidden animate-scale-in">
            <div
              className="absolute inset-0 opacity-5"
              style={{ background: "var(--gradient-gold)" }}
            />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/10 border-4 border-accent mb-6 animate-pulse-slow">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-accent" />
              </div>

              <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4 gradient-text">
                Garantia de 7 Dias
              </h3>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Se em até 7 dias você não sentir uma transformação real na sua
                autoestima e presença,{" "}
                <span className="font-bold text-foreground">
                  devolvemos seu dinheiro
                </span>
                . Sem perguntas, sem complicação.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12">
            Perguntas <span className="gradient-text-rose">Frequentes</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "É físico ou digital?",
                answer:
                  "É 100% digital! Você recebe o eBook em PDF no seu e-mail imediatamente após a confirmação do pagamento. Pode ler no celular, tablet ou computador.",
              },
              {
                question: "Como recebo o acesso?",
                answer:
                  "Assim que o pagamento for aprovado, você recebe um e-mail com o link de download. O acesso é imediato e vitalício.",
              },
              {
                question: "Serve para quem está solteira?",
                answer:
                  "Com certeza! O eBook é sobre você se reconectar com sua essência, aumentar sua autoestima e presença. Funciona esteja você solteira, namorando ou casada. É sobre se sentir poderosa, não sobre status de relacionamento.",
              },
              {
                question: "Tem garantia?",
                answer:
                  "Sim! Você tem 7 dias de garantia incondicional. Se não gostar ou não sentir resultado, basta pedir reembolso total.",
              },
              {
                question: "Posso parcelar?",
                answer:
                  "Sim! Você pode pagar à vista por R$47,90 ou parcelar em até 12x de R$5,33 no cartão de crédito.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-2 border-border hover:border-primary/50 rounded-lg px-6 transition-all duration-300 bg-background"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="cta-final"
        className="py-16 md:py-24 px-4 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "var(--gradient-hero)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Está pronta para se tornar{" "}
            <span className="gradient-text-rose text-shadow-glow">
              inesquecível
            </span>
            ?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desperte sua sensualidade natural, aumente sua autoestima e atraia
            olhares por onde passar.
          </p>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="text-3xl text-muted-foreground line-through">
                  R$97,00
                </span>
                <span className="text-5xl md:text-6xl font-bold gradient-text-rose text-shadow-glow">
                  R$47,90
                </span>
              </div>
              <p className="text-xl">
                ou em até{" "}
                <span className="font-bold gradient-text">
                  12x de R$5,33 no cartão
                </span>
              </p>
            </div>

            <Button
              size="xl"
              variant="cta"
              className="shadow-[var(--shadow-glow)] animate-pulse-glow text-base md:text-xl px-8 md:px-16 h-16 md:h-20"
            >
              🔥 QUERO ME TORNAR INESQUECÍVEL AGORA!
            </Button>

            <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Acesso imediato após confirmação</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>Compra 100% segura e protegida</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span>7 dias de garantia incondicional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground space-y-2">
          <p>© 2025 Desperte Seu Sex Appeal. Todos os direitos reservados.</p>
          <p>Este produto não garante resultados específicos e individuais podem variar.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
