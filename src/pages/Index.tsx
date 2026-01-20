import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'MessageSquare',
      title: 'Коррекция звукопроизношения',
      description: 'Постановка и автоматизация звуков. Работа над чистотой и правильностью речи.',
      age: '3-12 лет',
      color: 'bg-blue-500',
    },
    {
      icon: 'BookOpen',
      title: 'Развитие речи',
      description: 'Расширение словарного запаса, формирование связной речи, работа над грамматикой.',
      age: '2-10 лет',
      color: 'bg-orange-500',
    },
    {
      icon: 'Sparkles',
      title: 'Подготовка к школе',
      description: 'Обучение грамоте, развитие фонематического слуха, подготовка к письму и чтению.',
      age: '5-7 лет',
      color: 'bg-pink-500',
    },
    {
      icon: 'Brain',
      title: 'Логопедический массаж',
      description: 'Специальные техники для улучшения артикуляции и мышечного тонуса.',
      age: '3-12 лет',
      color: 'bg-green-500',
    },
    {
      icon: 'Volume2',
      title: 'Коррекция заикания',
      description: 'Работа над плавностью речи, дыхательные упражнения, снятие речевых зажимов.',
      age: '4-14 лет',
      color: 'bg-purple-500',
    },
    {
      icon: 'Smile',
      title: 'Развитие моторики',
      description: 'Пальчиковые игры, артикуляционная гимнастика для улучшения речевого аппарата.',
      age: '2-8 лет',
      color: 'bg-cyan-500',
    },
  ];

  const portfolio = [
    {
      name: 'Саша, 5 лет',
      problem: 'Не произносил звуки Р, Л, Ш',
      result: 'Через 3 месяца — чистая речь',
      duration: '3 месяца',
      emoji: '👦',
    },
    {
      name: 'Маша, 6 лет',
      problem: 'Сложности с построением фраз',
      result: 'Уверенно разговаривает, читает',
      duration: '4 месяца',
      emoji: '👧',
    },
    {
      name: 'Дима, 4 года',
      problem: 'Задержка речевого развития',
      result: 'Активный словарь, связная речь',
      duration: '6 месяцев',
      emoji: '🧒',
    },
    {
      name: 'Лена, 7 лет',
      problem: 'Заикание, речевые зажимы',
      result: 'Плавная речь, уверенность',
      duration: '5 месяцев',
      emoji: '👧',
    },
  ];

  const testimonials = [
    {
      name: 'Елена Петрова',
      child: 'Мама Ярослава, 5 лет',
      text: 'Наш сын не выговаривал половину звуков, стеснялся говорить. За 4 месяца занятий с Анной — невероятные результаты! Ребёнок говорит чисто, с удовольствием общается. Огромное спасибо!',
      rating: 5,
    },
    {
      name: 'Ольга Смирнова',
      child: 'Мама Софии, 6 лет',
      text: 'Готовились к школе, нужно было наверстать упущенное. Анна нашла подход к дочке, превратила занятия в игру. София научилась читать и писать, речь стала богаче. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Дмитрий Волков',
      child: 'Папа Максима, 4 года',
      text: 'Переживали из-за задержки речи. Специалист составила индивидуальную программу, работали комплексно. Сын начал говорить фразами, словарный запас растёт с каждым днём!',
      rating: 5,
    },
  ];

  const advantages = [
    { icon: 'Award', title: '12 лет опыта', text: 'Работы с детьми' },
    { icon: 'GraduationCap', title: 'Высшее образование', text: 'Логопед-дефектолог' },
    { icon: 'Target', title: '200+ детей', text: 'Успешных результатов' },
    { icon: 'Heart', title: 'Индивидуальный подход', text: 'К каждому ребёнку' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-orange-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-pink-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-orange-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-block mb-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-2 text-lg border-0">
                ✨ Логопед с 12-летним стажем
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="bg-gradient-to-r from-blue-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Помогу вашему ребёнку
              </span>
              <br />
              <span className="text-gray-800">говорить чисто и уверенно</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Коррекция речи, подготовка к школе и развитие речевых навыков
              <br />
              <span className="font-semibold text-blue-600">Первое занятие — бесплатно!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white text-lg px-8 py-6 rounded-full font-semibold shadow-xl">
                Записаться на консультацию
                <Icon name="Calendar" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full font-semibold">
                Посмотреть результаты
                <Icon name="ArrowDown" className="ml-2" size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-lg animate-slide-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <Icon name={item.icon} className="text-blue-500 mx-auto mb-2" size={32} />
                  <div className="font-bold text-gray-800">{item.title}</div>
                  <div className="text-sm text-gray-600">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              Услуги и программы
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Индивидуальные занятия с учётом особенностей развития каждого ребёнка
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 ${service.color}`}></div>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mb-4 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center`}>
                    <Icon name={service.icon} className={`${service.color.replace('bg-', 'text-')}`} size={32} />
                  </div>
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs">{service.age}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="ghost" className="w-full text-blue-600 hover:bg-blue-50">
                    Подробнее
                    <Icon name="ChevronRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Примеры работ
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Реальные истории успеха наших маленьких учеников
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {portfolio.map((item, index) => (
              <Card
                key={index}
                className="bg-white border-2 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                    <div className="text-sm font-semibold text-red-700 mb-1">Проблема:</div>
                    <div className="text-sm text-red-600">{item.problem}</div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                    <div className="text-sm font-semibold text-green-700 mb-1">Результат:</div>
                    <div className="text-sm text-green-600">{item.result}</div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Icon name="Clock" size={16} className="text-blue-500" />
                    <span>{item.duration}</span>
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
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Отзывы родителей
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Что говорят мамы и папы наших учеников
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-pink-200 bg-gradient-to-br from-white to-pink-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="fill-yellow-400 text-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.child}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-pink-600 to-orange-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Запишитесь на бесплатную консультацию
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Определим проблему и составим индивидуальный план занятий
          </p>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-left">
                  <label className="block mb-2 font-semibold text-gray-800">Ваше имя</label>
                  <Input
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-2 h-12 text-lg"
                  />
                </div>

                <div className="text-left">
                  <label className="block mb-2 font-semibold text-gray-800">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-2 h-12 text-lg"
                  />
                </div>

                <div className="text-left">
                  <label className="block mb-2 font-semibold text-gray-800">Расскажите о проблеме</label>
                  <Textarea
                    placeholder="Что беспокоит в речи ребёнка? Сколько лет ребёнку?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="border-2 text-lg"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white text-xl py-7 rounded-full font-bold shadow-xl"
                >
                  Записаться на консультацию
                  <Icon name="Send" className="ml-2" size={24} />
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              Контакты
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon name="Phone" className="text-blue-600" size={28} />
                </div>
                <h3 className="font-bold mb-2 text-gray-800">Телефон</h3>
                <p className="text-blue-600 font-semibold">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-100 flex items-center justify-center">
                  <Icon name="MessageCircle" className="text-pink-600" size={28} />
                </div>
                <h3 className="font-bold mb-2 text-gray-800">WhatsApp</h3>
                <p className="text-pink-600 font-semibold">Написать</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                  <Icon name="Send" className="text-orange-600" size={28} />
                </div>
                <h3 className="font-bold mb-2 text-gray-800">Telegram</h3>
                <p className="text-orange-600 font-semibold">Написать</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <Icon name="Mail" className="text-purple-600" size={28} />
                </div>
                <h3 className="font-bold mb-2 text-gray-800">Email</h3>
                <p className="text-purple-600 font-semibold text-sm">logoped@mail.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gradient-to-r from-blue-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Анна Иванова — Логопед-дефектолог</p>
          <p className="text-white/80">Помогаю детям говорить чисто и уверенно с 2012 года</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
