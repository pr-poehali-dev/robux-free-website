
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Gift, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <header className="container py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="Лого" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-primary">RobuxBoost</h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">Как это работает</a>
          <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors">Вопросы</a>
        </nav>
        <Button>Войти</Button>
      </header>

      <main>
        {/* Hero секция */}
        <section className="container py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Получи <span className="text-primary">робуксы</span> бесплатно уже сегодня!
            </h2>
            <p className="text-lg text-muted-foreground">
              Мгновенное начисление робуксов на твой аккаунт Roblox. Без скрытых условий и сложных заданий.
            </p>
            <Button size="lg" className="animate-pulse">
              <Gift className="mr-2" />
              Получить робуксы
            </Button>
          </div>
          <div className="flex-1">
            <Card className="p-6 border-4 border-primary/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Забрать бесплатные робуксы</h3>
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="basic">400 R$</TabsTrigger>
                  <TabsTrigger value="standard">1000 R$</TabsTrigger>
                  <TabsTrigger value="premium">2500 R$</TabsTrigger>
                </TabsList>
                <TabsContent value="basic" className="space-y-4">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium leading-none mb-2 block">
                        Имя пользователя Roblox
                      </label>
                      <Input placeholder="Введите ваше имя в Roblox" required />
                    </div>
                    <Button className="w-full">Получить 400 робуксов</Button>
                  </form>
                </TabsContent>
                <TabsContent value="standard" className="space-y-4">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium leading-none mb-2 block">
                        Имя пользователя Roblox
                      </label>
                      <Input placeholder="Введите ваше имя в Roblox" required />
                    </div>
                    <Button className="w-full">Получить 1000 робуксов</Button>
                  </form>
                </TabsContent>
                <TabsContent value="premium" className="space-y-4">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium leading-none mb-2 block">
                        Имя пользователя Roblox
                      </label>
                      <Input placeholder="Введите ваше имя в Roblox" required />
                    </div>
                    <Button className="w-full">Получить 2500 робуксов</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </section>

        {/* Преимущества */}
        <section id="benefits" className="container py-16 bg-card/50 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Мгновенное начисление</h3>
              <p className="text-muted-foreground">Робуксы поступают на ваш аккаунт в течение нескольких минут</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасно</h3>
              <p className="text-muted-foreground">Мы не запрашиваем пароли или другую конфиденциальную информацию</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Проверено игроками</h3>
              <p className="text-muted-foreground">Более 50 000 игроков уже получили бесплатные робуксы</p>
            </Card>
          </div>
        </section>

        {/* Как это работает */}
        <section id="how-it-works" className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Введите имя пользователя</h3>
              <p className="text-muted-foreground">Укажите ваше имя пользователя в Roblox (не требуется пароль)</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Выберите количество</h3>
              <p className="text-muted-foreground">Выберите желаемое количество бесплатных робуксов</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Получите робуксы</h3>
              <p className="text-muted-foreground">Робуксы будут начислены на ваш аккаунт в течение нескольких минут</p>
            </div>
          </div>
        </section>

        {/* Часто задаваемые вопросы */}
        <section id="faq" className="container py-16 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>Это действительно бесплатно?</AccordionTrigger>
              <AccordionContent>
                Да, наш сервис предоставляет робуксы совершенно бесплатно. Мы сотрудничаем с разработчиками Roblox и спонсорами для обеспечения этой возможности.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Как быстро я получу робуксы?</AccordionTrigger>
              <AccordionContent>
                Обычно начисление происходит в течение 10-15 минут. В редких случаях, при высокой нагрузке, процесс может занять до 24 часов.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Есть ли ограничения на количество робуксов?</AccordionTrigger>
              <AccordionContent>
                Каждый пользователь может получить до 2500 робуксов в месяц. Это ограничение установлено для справедливого распределения ресурсов.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Безопасно ли это для моего аккаунта?</AccordionTrigger>
              <AccordionContent>
                Абсолютно! Мы не запрашиваем ваш пароль или другие конфиденциальные данные. Для начисления робуксов нам требуется только ваше имя пользователя в Roblox.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <footer className="bg-card py-8">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">© 2024 RobuxBoost. Не аффилирован с Roblox Corporation.</p>
          <p className="text-muted-foreground text-xs mt-2">
            Roblox, логотип Roblox и Robux являются зарегистрированными товарными знаками Roblox Corporation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
