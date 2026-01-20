import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const benefits = [
    {
      icon: 'Zap',
      title: 'Быстрый старт',
      description: 'Начните обучение в день покупки. Доступ к материалам открывается мгновенно.',
    },
    {
      icon: 'Users',
      title: 'Личный куратор',
      description: 'Персональный наставник поможет на каждом этапе обучения.',
    },
    {
      icon: 'Award',
      title: 'Сертификат',
      description: 'Получите официальный сертификат после успешного завершения курса.',
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Помощь в трудоустройстве и построении карьеры после обучения.',
    },
  ];

  const courses = [
    {
      icon: 'Code',
      title: 'Веб-разработка',
      description: 'От основ HTML до создания полноценных веб-приложений на React и Node.js.',
      price: '49 900 ₽',
      duration: '6 месяцев',
    },
    {
      icon: 'Palette',
      title: 'UI/UX Дизайн',
      description: 'Создание пользовательских интерфейсов, прототипирование в Figma, исследования.',
      price: '39 900 ₽',
      duration: '4 месяца',
    },
    {
      icon: 'BarChart',
      title: 'Аналитика данных',
      description: 'Python, SQL, визуализация данных и машинное обучение для бизнеса.',
      price: '44 900 ₽',
      duration: '5 месяцев',
    },
    {
      icon: 'Megaphone',
      title: 'Digital-маркетинг',
      description: 'SEO, контекстная реклама, SMM и аналитика для продвижения в интернете.',
      price: '34 900 ₽',
      duration: '3 месяца',
    },
  ];

  const portfolio = [
    {
      name: 'Анна Соколова',
      role: 'Веб-разработчик',
      company: 'Яндекс',
      result: 'Получила оффер через 2 месяца после выпуска',
      image: '👩‍💻',
    },
    {
      name: 'Дмитрий Волков',
      role: 'UI/UX дизайнер',
      company: 'VK',
      result: 'Вырос в зарплате на 150% за год',
      image: '👨‍🎨',
    },
    {
      name: 'Екатерина Белова',
      role: 'Data Analyst',
      company: 'Сбербанк',
      result: 'Сменила профессию с нуля',
      image: '👩‍💼',
    },
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      role: 'Выпускник курса "Веб-разработка"',
      text: 'Невероятно насыщенная программа! За 6 месяцев получил больше знаний, чем за 3 года самостоятельного обучения. Кураторы всегда на связи, задания интересные и приближены к реальным задачам.',
      rating: 5,
    },
    {
      name: 'Мария Кузнецова',
      role: 'Выпускница курса "UI/UX Дизайн"',
      text: 'Прошла курс и за месяц нашла работу мечты! Портфолио, которое создала на курсе, произвело впечатление на работодателей. Спасибо за профессиональный подход!',
      rating: 5,
    },
    {
      name: 'Игорь Смирнов',
      role: 'Выпускник курса "Аналитика данных"',
      text: 'Отличное соотношение теории и практики. Сразу применял знания на реальных проектах. Преподаватели — практикующие специалисты из топовых компаний.',
      rating: 5,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-primary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Начни карьеру мечты
            <br />
            <span className="text-white/90">уже сегодня</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Онлайн-курсы от практикующих экспертов. Трудоустройство и поддержка кураторов на всём пути обучения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold shadow-xl">
              Выбрать курс
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold">
              Бесплатный урок
              <Icon name="Play" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Почему выбирают нас</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Мы создали идеальные условия для вашего профессионального роста
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-secondary flex items-center justify-center">
                    <Icon name={benefit.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Наши курсы</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Профессиональные программы обучения с гарантированным результатом
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-3 gradient-accent"></div>
                <CardContent className="p-8">
                  <div className="w-14 h-14 mb-4 rounded-xl gradient-primary flex items-center justify-center">
                    <Icon name={course.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                  <p className="text-muted-foreground mb-6">{course.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={18} className="text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={18} className="text-primary" />
                      <span>Групповое обучение</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold gradient-text">{course.price}</div>
                    </div>
                    <Button className="gradient-primary text-white rounded-full px-6">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Истории успеха</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Наши выпускники работают в лучших компаниях России
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((person, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{person.image}</div>
                  <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                  <div className="text-primary font-semibold mb-1">{person.role}</div>
                  <div className="text-sm text-muted-foreground mb-4">{person.company}</div>
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
                    <p className="text-sm font-medium">{person.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Отзывы выпускников
          </h2>
          <p className="text-center text-white/90 mb-16 text-lg max-w-2xl mx-auto">
            Более 5000 студентов уже изменили свою жизнь благодаря нашим курсам
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/95 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="fill-yellow-400 text-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Свяжитесь с нами</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Остались вопросы? Мы с радостью на них ответим!
          </p>
          
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-2"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-semibold">Email</label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-2"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-semibold">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите, чем мы можем помочь..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="border-2"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full gradient-primary text-white text-lg py-6 rounded-full font-semibold">
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Mail" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">info@courses.ru</div>
                </div>
                <div>
                  <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="font-semibold">Телефон</div>
                  <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                </div>
                <div>
                  <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="font-semibold">Адрес</div>
                  <div className="text-sm text-muted-foreground">Москва, ул. Примерная, 1</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Онлайн Курсы</h3>
              <p className="text-white/80">Образовательная платформа нового поколения</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-white/80">
                <li>Веб-разработка</li>
                <li>UI/UX Дизайн</li>
                <li>Аналитика данных</li>
                <li>Digital-маркетинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Преподаватели</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition cursor-pointer">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition cursor-pointer">
                  <Icon name="Send" size={20} />
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            © 2024 Онлайн Курсы. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
