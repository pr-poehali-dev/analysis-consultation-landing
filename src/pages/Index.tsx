import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800">Профессиональная медицинская консультация</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Расшифровка анализов и <span className="text-blue-600">персональные рекомендации</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Получите профессиональную консультацию по результатам ваших анализов от опытного специалиста. 
              Понятные объяснения и практические рекомендации для вашего здоровья.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Icon name="FileText" className="mr-2 h-5 w-5" />
                Отправить анализы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Что я предлагаю</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к анализу результатов исследований и персональные рекомендации
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="FileSearch" className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Расшифровка анализов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Детальное объяснение каждого показателя в понятной форме. 
                  Что означают цифры и как они влияют на ваше здоровье.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Heart" className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Персональные рекомендации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Индивидуальные советы по питанию, образу жизни и необходимым 
                  дополнительным обследованиям на основе ваших результатов.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon name="Users" className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Консультация специалиста</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Онлайн или офлайн встреча с обсуждением результатов, 
                  ответами на вопросы и составлением плана действий.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Почему выбирают меня</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon name="Award" className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Опыт более 10 лет</h3>
                  <p className="text-gray-600">Практикующий врач с большим опытом в области лабораторной диагностики</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Icon name="Clock" className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Быстрая обработка</h3>
                  <p className="text-gray-600">Результаты консультации в течение 24 часов после получения анализов</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Icon name="Shield" className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Конфиденциальность</h3>
                  <p className="text-gray-600">Полная защита персональных данных и медицинской информации</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Icon name="MessageCircle" className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Поддержка</h3>
                  <p className="text-gray-600">Возможность задать дополнительные вопросы в течение недели</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Тарифы и цены</h2>
            <p className="text-xl text-gray-600">Выберите подходящий формат консультации</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription>Письменная расшифровка</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">2500₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Расшифровка анализов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Письменные рекомендации</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Результат в течение 24 часов</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-blue-600">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Стандартный</CardTitle>
                <CardDescription>Консультация + расшифровка</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">4500₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Все из базового тарифа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">30-минутная консультация</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Ответы на вопросы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Поддержка 7 дней</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <CardDescription>Комплексная консультация</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">7500₽</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Все из стандартного</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">60-минутная консультация</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Персональный план здоровья</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Поддержка 30 дней</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Как проходит работа</h2>
            <p className="text-xl text-gray-600">Простой и понятный процесс получения консультации</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Отправка анализов</h3>
                <p className="text-gray-600 text-sm">Загрузите фото или скан ваших анализов через форму</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Анализ результатов</h3>
                <p className="text-gray-600 text-sm">Изучаю показатели и готовлю персональные рекомендации</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Консультация</h3>
                <p className="text-gray-600 text-sm">Встречаемся онлайн или получаете письменное заключение</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Поддержка</h3>
                <p className="text-gray-600 text-sm">Отвечаю на дополнительные вопросы и помогаю с планом</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Записаться на консультацию</h2>
              <p className="text-xl text-gray-600">Оставьте заявку и я свяжусь с вами в течение часа</p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Какие анализы нужно разобрать?</label>
                    <Textarea placeholder="Опишите, какие анализы у вас есть и что вас беспокоит" rows={4} />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Медицинская консультация</h3>
            <p className="text-gray-400 mb-6">Профессиональная расшифровка анализов и персональные рекомендации</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Phone" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Mail" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="MessageCircle" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;