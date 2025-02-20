import Image from "next/image";

export default function About({ data }: any) {
	return <>
		<h2 className='text-lg md:text-5xl'>فروشگاه اینترنتی مدیسه</h2>
		<div className='md:flex py-10 gap-x-3'>
			<div className='md:w-2/3'>
				<p className='text-[12px] md:text-[1rem] text-justify leading-7 font-light text-[#1a1a1a]'>فروشگاه اینترنتی مدیسه که فعالیت خود را از سال ۱۳۹۴ آغاز کرده، امروز به یک فروشگاه چندمنظوره پویا و جامع تبدیل شده است. ما در مدیسه افتخار داریم که طیف گسترده‌ای از محصولات شامل پوشاک و لوازم متنوع برای مردان، زنان و کودکان، عطر و لوازم آرایشی و بهداشتی، محصولات خانه و آشپزخانه، لوازم الکترونیک، تجهیزات ورزشی و ملزومات سفر به همراه کالاهای سوپرمارکتی متنوع را با بهترین قیمت‌ها در اختیار شما قرار دهیم. فلسفه ما در مدیسه بر پایه‌ی ایجاد یک تجربه خرید آنلاین سریع، راحت و به‌صرفه است، که با تکیه بر سه اصل کلیدی تحقق می‌یابد: روش‌های پرداخت متنوع ، ۷ روز ضمانت بازگشت کالا و تضمین اصالت محصولات . ما همواره در تلاشیم تا با ارائه محصولات با کیفیت، نیازهای مختلف مشتریان‌مان را برآورده کنیم. از روز نخست، هدف ما چیزی فراتر از تنها فروش بوده است؛ ما به دنبال جلب رضایت مشتریان و ارتقای دائمی کیفیت خدمات هستیم. امروز، به لطف همراهی و اعتماد شما، مدیسه به یکی از فروشگاه‌های آنلاین محبوب و کاربردی در ایران تبدیل شده است و با تمام انرژی در مسیر رشد و بهبود مداوم گام برمی‌دارد. به همین دلیل، ما در مدیسه همیشه آماده‌ایم تا با رویکردی نوآورانه و مشتری‌محور، تجربه‌ای لذت‌بخش از خرید اینترنتی را برای شما رقم بزنیم.</p>
			</div>
			<div className='md:w-1/3 flex items-center'>
				<ul className='flex items-center'>
					{data.map((value: any, index: any) => <li key={index}><Image src={value.image} alt='app' className='md:max-w-20' /></li>)}
				</ul>
			</div>
		</div>
	</>
}