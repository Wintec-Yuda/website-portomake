"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import {
	FiCheck,
	FiMail,
	FiPhone,
	FiClock,
	FiGift,
	FiLayers,
	FiCamera,
	FiPenTool,
	FiFileText,
	FiShoppingCart,
	FiChevronLeft,
	FiChevronRight,
	FiUserCheck,
	FiBriefcase,
	FiTrendingUp,
	FiRefreshCw,
	FiStar,
} from "react-icons/fi";
import { FaChalkboardTeacher, FaUserTie, FaRegSmile } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";
import { FaReact, FaCode } from "react-icons/fa";

export default function LandingPage() {
	const [activeCategory, setActiveCategory] = useState(0);
	const scrollRef = useRef(null);

	// Data for different sections
	const packages = [
		{
			name: "Free",
			price: "0K",
			desc: "Link source code portfolio saja",
			features: [
				"Desain modern & responsive",
				"Link website portfolio",
				"Link source code",
			],
			best: false,
			free: true,
		},
		{
			name: "Standard",
			price: "69K",
			desc: "Codingan + Akun Vercel & GitHub",
			features: [
				"Semua fitur Basic",
				"Akun GitHub",
				"Akun Vercel",
				"Deployment langsung",
				"Revisi minor gratis 2x",
				"Revisi mayor (+Rp10-30k)",
			],
			best: true,
			free: false,
		},
		{
			name: "Premium",
			price: "99K",
			desc: "Lengkap dengan domain gratis",
			features: [
				"Semua fitur Standard",
				"Domain namamu.my.id gratis 1 tahun",
				"Gmail",
				"Revisi minor unlimited",
				"Revisi mayor (+Rp10-30k)",
			],
			best: false,
			free: false,
		},
	];

	const revisionPolicy = {
		minor: "Perubahan kecil (typo, warna, teks kecil)",
		major: "Perubahan besar (layout, struktur, tambah section)",
		minorFree: "Gratis sesuai paket",
		majorCost: "Biaya tambahan Rp10.000 - Rp30.000 tergantung kompleksitas",
	};

	const portfolioCategories = [
		{
			name: "IT Developer",
			icon: <FaCode className="text-2xl" />,
			items: [
				{
					title: "Fullstack Developer",
					desc: "I am a Full Stack Web Developer with expertise in backend and frontend development.",
					image: "/yuda.png",
					link: "https://website-portfolio-henna.vercel.app/",
				},
				{
					title: "UI/UX Designer & Frontend Engineer",
					desc: "An individual with high enthusiasm for delving into digital technology.",
					image: "/farih.png",
					link: "https://website-portfolio-henna.vercel.app/farih",
				},
			],
		},
		{
			name: "Media Sosial",
			icon: <FiCamera className="text-2xl" />,
			items: [
				{
					title: "Digital Media Specialist",
					desc: "GInformatics Engineering Student with a passion for data science and digital marketing",
					image: "/tito.png",
					link: "https://website-portfolio-henna.vercel.app/tito",
				},
			],
		},
		{
			name: "Others",
			icon: <FiPenTool className="text-2xl" />,
			items: [
				{
					title: "Animal Husbandry",
					desc: "I'm a 24-year-old graduate with a Bachelor's degree in Animal Husbandry from Nusantara PGRI University Kediri.",
					image: "/hebi.png",
					link: "https://website-portfolio-henna.vercel.app/hebi",
				},
			],
		},
	];

	const steps = [
		{
			step: "1",
			title: "Pesan Paket",
			desc: "Pilih paket yang sesuai melalui WhatsApp/website",
			icon: <FiShoppingCart className="w-6 h-6" />,
		},
		{
			step: "2",
			title: "Kirim CV (PDF)",
			desc: "Emailkan CV dan materi portfolio Anda",
			icon: <FiFileText className="w-6 h-6" />,
		},
		{
			step: "3",
			title: "Tunggu 1-2 Hari",
			desc: "Kami kerjakan portfolio Anda dengan cepat",
			icon: <FiClock className="w-6 h-6" />,
		},
		{
			step: "4",
			title: "Terima Semuanya",
			desc: "Dapatkan akses ke semua akun dan website",
			icon: <FaRegSmile className="w-6 h-6" />,
		},
	];

	const portfolioExamples = [
		{
			category: "Guru/Pendidik",
			icon: <FaChalkboardTeacher className="text-3xl text-blue-500" />,
			examples: [
				{
					title: "Portfolio Guru Matematika",
					desc: "Menampilkan metode pengajaran dan materi",
				},
				{
					title: "Portfolio Pengajar Bahasa",
					desc: "Sertifikasi dan teknik pengajaran",
				},
			],
		},
		{
			category: "Content Creator",
			icon: <FiCamera className="text-3xl text-purple-500" />,
			examples: [
				{
					title: "Portfolio YouTuber",
					desc: "Gallery video dan statistik channel",
				},
				{ title: "Portfolio Podcaster", desc: "Daftar episode dan testimoni" },
			],
		},
		{
			category: "Desainer",
			icon: <FiPenTool className="text-3xl text-pink-500" />,
			examples: [
				{
					title: "Portfolio Desain Grafis",
					desc: "Koleksi karya desain dan branding",
				},
				{ title: "Portfolio Fotografer", desc: "Gallery foto profesional" },
			],
		},
	];

	const techStack = [
		{
			icon: <SiNextdotjs className="text-5xl text-gray-900" />,
			name: "Next.js",
		},
		{ icon: <FaReact className="text-5xl text-blue-500" />, name: "React" },
		{
			icon: <SiTailwindcss className="text-5xl text-cyan-500" />,
			name: "Tailwind CSS",
		},
		{
			icon: <SiFramer className="text-5xl text-slate-900" />,
			name: "Framer Motion",
		},
	];

	const features = [
		{
			icon: <FiStar className="w-6 h-6 text-red-600" />,
			title: "Personal Branding",
			desc: "Membangun identitas unik dan membedakan Anda dari yang lain",
		},
		{
			icon: <FiBriefcase className="w-6 h-6 text-pink-600" />,
			title: "Menarik Peluang Kerja",
			desc: "Memudahkan perekrut melihat karya dan pengalaman Anda",
		},
		{
			icon: <FiRefreshCw className="w-6 h-6 text-indigo-600" />,
			title: "Mudah Diperbarui",
			desc: "Tambahkan proyek baru atau update konten kapan saja",
		},
		{
			icon: <FiGift className="w-6 h-6 text-blue-600" />,
			title: "All-in-One Package",
			desc: "Domain, hosting, email profesional",
		},
		{
			icon: <FiUserCheck className="w-6 h-6 text-orange-600" />,
			title: "Meningkatkan Kredibilitas",
			desc: "Membantu Anda tampil lebih profesional di mata klien",
		},
		{
			icon: <FiTrendingUp className="w-6 h-6 text-yellow-600" />,
			title: "Investasi Jangka Panjang",
			desc: "Portfolio online terus bekerja mempromosikan Anda",
		},
	];

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
			{/* Navigation */}
			<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16 items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="flex items-center"
						>
							<span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								PortoMake
							</span>
						</motion.div>

						<div className="hidden md:flex items-center space-x-8">
							{["features", "pricing", "portfolio", "contact"].map((item) => (
								<motion.a
									key={item}
									whileHover={{ scale: 1.05 }}
									href={`#${item}`}
									className="text-gray-700 hover:text-blue-600 transition-colors capitalize"
								>
									{item}
								</motion.a>
							))}
						</div>

						<motion.a
							href="#pricing"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
						>
							Pesan Sekarang
						</motion.a>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
							<span className="text-blue-600">Portfolio Profesional</span> dalam
							1-2 Hari
						</h1>
						<p className="mt-6 text-lg text-gray-600">
							Dari CV biasa ke website portfolio elegan. Tanpa ribet, tanpa
							coding.
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							{[
								{ icon: <FiClock />, text: "Proses 1-2 Hari" },
								{ icon: <FiGift />, text: "Domain gratis" },
								{ icon: <FiLayers />, text: "Terima beres" },
							].map((item, i) => (
								<div
									key={i}
									className="flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
								>
									{item.icon} <span className="ml-1">{item.text}</span>
								</div>
							))}
						</div>

						<div className="mt-8 flex flex-wrap gap-4">
							<motion.a
								href="#pricing"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
							>
								Buat Sekarang
							</motion.a>
							<motion.a
								href="#portfolio"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all inline-block"
							>
								Lihat Contoh
							</motion.a>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="relative rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-200 p-4">
							<div className="bg-gray-800 text-white p-3 rounded-t-lg flex items-center">
								<div className="flex space-x-2 mr-4">
									<div className="w-3 h-3 rounded-full bg-red-500"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
									<div className="w-3 h-3 rounded-full bg-green-500"></div>
								</div>
							</div>
							<img
								src="/yuda.png"
								alt="Yuda Portfolio"
								className="w-full h-auto rounded-b-lg"
							/>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<SectionWrapper
				id="features"
				title="Kenapa Portfolio Online Penting?"
				bgColor="bg-white"
			>
				<div className="grid md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							icon={feature.icon}
							title={feature.title}
							desc={feature.desc}
							delay={index * 0.1}
						/>
					))}
				</div>
			</SectionWrapper>

			{/* Pricing Section */}
			<SectionWrapper id="pricing" title="Paket Harga" bgColor="bg-gray-50">
				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{packages.map((pkg, index) => (
						<PricingCard
							key={index}
							name={pkg.name}
							price={pkg.price}
							desc={pkg.desc}
							features={pkg.features}
							best={pkg.best}
							free={pkg.free}
							delay={index * 0.1}
						/>
					))}
				</div>
			</SectionWrapper>

			{/* Revision Policy Section */}
			<SectionWrapper title="Kebijakan Revisi" bgColor="bg-white">
				<div className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-8">
					<h3 className="text-xl font-semibold mb-4">Jenis Revisi:</h3>
					<div className="grid md:grid-cols-2 gap-6 mb-8">
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<h4 className="font-medium text-blue-600 mb-2">Revisi Minor</h4>
							<p className="text-gray-600 mb-3">{revisionPolicy.minor}</p>
							<div className="flex items-center text-green-600">
								<FiCheck className="mr-2" /> {revisionPolicy.minorFree}
							</div>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<h4 className="font-medium text-blue-600 mb-2">Revisi Mayor</h4>
							<p className="text-gray-600 mb-3">{revisionPolicy.major}</p>
							<div className="flex items-center text-orange-600">
								<FiClock className="mr-2" /> {revisionPolicy.majorCost}
							</div>
						</div>
					</div>
					<p className="text-gray-600 text-sm">
						* Biaya revisi mayor tergantung kompleksitas perubahan. Akan
						dikonfirmasi terlebih dahulu sebelum pengerjaan.
					</p>
				</div>
			</SectionWrapper>

			{/* Portfolio Showcase Section */}
			<SectionWrapper
				id="portfolio"
				title="Contoh Portfolio"
				bgColor="bg-gray-50"
			>
				{/* Category Navigation */}
				<div className="relative mb-8">
					<div className="flex items-center justify-between mb-4">
						<h3 className="text-xl font-semibold">Pilih Kategori:</h3>
						<div className="flex space-x-2">
							<button
								onClick={scrollLeft}
								className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
							>
								<FiChevronLeft />
							</button>
							<button
								onClick={scrollRight}
								className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
							>
								<FiChevronRight />
							</button>
						</div>
					</div>

					<div
						ref={scrollRef}
						className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
						style={{ scrollSnapType: "x mandatory" }}
					>
						{portfolioCategories.map((category, index) => (
							<button
								key={index}
								onClick={() => setActiveCategory(index)}
								className={`flex-shrink-0 px-6 py-3 rounded-full flex items-center space-x-2 transition-colors ${
									activeCategory === index
										? "bg-blue-600 text-white"
										: "bg-white text-gray-700 hover:bg-gray-100"
								}`}
								style={{ scrollSnapAlign: "start" }}
							>
								{category.icon}
								<span>{category.name}</span>
							</button>
						))}
					</div>
				</div>

				{/* Portfolio Items */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{portfolioCategories[activeCategory].items.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-lg font-semibold mb-2">{item.title}</h3>
								<p className="text-gray-600 mb-4">{item.desc}</p>
								<a
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
								>
									Lihat Portfolio <FiChevronRight className="ml-1" />
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</SectionWrapper>

			{/* Tech Stack */}
			<SectionWrapper title="Teknologi Kami" bgColor="bg-gray-50">
				<div className="flex flex-wrap justify-center gap-8">
					{techStack.map((tech, index) => (
						<TechCard
							key={index}
							icon={tech.icon}
							name={tech.name}
							delay={index * 0.1}
						/>
					))}
				</div>
			</SectionWrapper>

			{/* Order Steps */}
			<SectionWrapper title="Cara Order" bgColor="bg-white">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{steps.map((step, index) => (
						<StepCard
							key={index}
							step={step.step}
							title={step.title}
							desc={step.desc}
							icon={step.icon}
							delay={index * 0.1}
						/>
					))}
				</div>
			</SectionWrapper>

			{/* Final CTA */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="max-w-4xl mx-auto text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-white mb-6"
					>
						Mulai Dari Rp39.000 Saja!
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="flex flex-wrap justify-center gap-4"
					>
						<motion.a
							href="#pricing"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
						>
							Pesan Sekarang
						</motion.a>
						<motion.a
							href="https://wa.me/6281230490961"
							target="_blank"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
						>
							Konsultasi Gratis
						</motion.a>
					</motion.div>
				</div>
			</section>

			{/* Contact Section */}
			<SectionWrapper id="contact" title="Hubungi Kami" bgColor="bg-gray-50">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<ContactInfo
							icon={<FiMail />}
							title="Email"
							content="portomake@gmail.com"
						/>
						<ContactInfo
							icon={<FiPhone />}
							title="WhatsApp"
							content="+62 8123-0490-961"
						/>
					</div>
					<ContactForm />
				</div>
			</SectionWrapper>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<h3 className="text-2xl font-bold mb-6">PortoMake</h3>
					<p className="text-gray-400 max-w-2xl mx-auto mb-8">
						Jasa pembuatan website portfolio profesional untuk semua bidang.
					</p>
					<div className="flex justify-center space-x-6 mb-8">
						{["Instagram", "WhatsApp", "Email"].map((item) => (
							<a
								key={item}
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								{item}
							</a>
						))}
					</div>
					<p className="text-gray-500 text-sm">
						&copy; {new Date().getFullYear()} PortoMake. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

// Reusable Components
function SectionWrapper({ id, title, children, bgColor }) {
	return (
		<section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						{title}
					</h2>
				</motion.div>
				{children}
			</div>
		</section>
	);
}

function FeatureCard({ icon, title, desc, delay }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
			viewport={{ once: true }}
			className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
		>
			<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
				{icon}
			</div>
			<h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
			<p className="text-gray-600">{desc}</p>
		</motion.div>
	);
}

function PricingCard({ name, price, desc, features, best, free, delay }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
			viewport={{ once: true }}
			className={`relative rounded-xl shadow-sm overflow-hidden ${
				best ? "ring-2 ring-blue-500" : "border border-gray-200"
			}`}
		>
			{best && (
				<div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
					BEST VALUE
				</div>
			)}
			<div className="p-8 bg-white">
				<h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
				<p className="text-gray-600 mb-6">{desc}</p>
				<div className="mb-8">
					<span className="text-4xl font-bold text-gray-900">Rp{price}</span>
				</div>
				<ul className="space-y-3">
					{features.map((feature, i) => (
						<li key={i} className="flex items-start">
							<FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
				{free ? (
					<div className="w-full flex flex-col items-center space-y-2">
						<motion.a
							href={`https://www.linkedin.com/in/mochamad-yuda-trinurais-4a87a1309`}
							target="_blank"
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.97 }}
							className={`w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg`}
						>
							Pilih Paket Gratis
						</motion.a>
						<p className="text-xs text-gray-500 text-center">
							<span className="font-medium">Syarat:</span> Ikuti akun LinkedIn &
							kirim DM untuk mendapatkan paket gratis
						</p>
					</div>
				) : (
					<motion.a
						href={`https://wa.me/6281230490961?text=${encodeURIComponent(
							`Saya tertarik dengan paket ${name}`
						)}`}
						target="_blank"
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						className={`w-full py-3 px-6 rounded-lg font-medium ${
							best
								? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
								: "bg-white border border-gray-300 text-gray-700 hover:border-blue-500"
						}`}
					>
						Pilih Paket
					</motion.a>
				)}
			</div>
		</motion.div>
	);
}

function TechCard({ icon, name, delay }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay }}
			viewport={{ once: true }}
			className="flex flex-col items-center p-6 bg-gray-50 rounded-xl"
		>
			{icon}
			<span className="mt-3 text-gray-700">{name}</span>
		</motion.div>
	);
}

function StepCard({ step, title, desc, icon, delay }) {
	return (
		<motion.div
			key={step}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
			viewport={{ once: true }}
			className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
		>
			<div className="flex items-center mb-4">
				<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
					<span className="text-blue-600 font-bold">{step}</span>
				</div>
				<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
					{icon}
				</div>
			</div>
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-gray-600">{desc}</p>
		</motion.div>
	);
}

function ContactInfo({ icon, title, content }) {
	return (
		<div className="flex items-start mb-6">
			<div className="text-blue-600 mt-1 mr-4 text-xl">{icon}</div>
			<div>
				<h3 className="font-semibold text-gray-900">{title}</h3>
				<a
					href="#"
					className="text-gray-600 hover:text-blue-600 transition-colors"
				>
					{content}
				</a>
			</div>
		</div>
	);
}

function ContactForm() {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const phoneNumber = "6281230490961";
		const encodedMessage = encodeURIComponent(
			`Halo, nama saya ${name}. ${message}`
		);
		const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
		window.open(waUrl, "_blank");
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			viewport={{ once: true }}
			className="bg-white p-8 rounded-xl shadow-sm"
		>
			<form onSubmit={handleSubmit} className="space-y-6">
				<InputField
					label="Nama Lengkap"
					type="text"
					placeholder="Nama Anda"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Pesan
					</label>
					<textarea
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
						placeholder="Ceritakan kebutuhan Anda..."
						rows="4"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
				<motion.button
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					type="submit"
					className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-bold shadow-md hover:shadow-lg transition-all"
				>
					Kirim Pesan
				</motion.button>
			</form>
		</motion.div>
	);
}

function InputField({ label, type, placeholder }) {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<input
				type={type}
				className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
				placeholder={placeholder}
			/>
		</div>
	);
}
