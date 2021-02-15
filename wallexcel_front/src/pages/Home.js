import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook, ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const Home = () => {
	return (
		<div className="bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-800 h-screen">
			<div className="px-5 py-12 md:px-12 md:py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="text-white flex justify-center flex-col">
						<h2 className="text-center md:text-left text-3xl md:text-5xl font-comfortaa font-light">
							Bienvenido a
						</h2>
						<h1 className="text-5xl md:text-7xl font-comfortaa text-center py-4 font-bold">
							Wallexcel
						</h1>
						<img
							className="w-56 md:w-72 mx-auto"
							src="https://cdn0.iconfinder.com/data/icons/business-finance-vol-2-56/512/money-wallet-virtual_balance-512.png"
							alt="wallet"
						/>
					</div>
					<div className="bg-gray-200 rounded-lg w-full md:w-5/6 lg:w-3/6 flex items-center flex-col py-8 md:pt-6 mx-auto">
						<div className="mt-4">
							<Link
								to="/signup"
								className="bg-blue-500 text-white  py-2 btn hover:bg-indigo-800  "
							>
								Crear Cuenta
							</Link>
						</div>
						<p className="py-6">O</p>
						<div className="flex flex-col justify-center">
							<div className="mb-2">
								<h2 className="text-center pb-2 ">Iniciar Sesión con:</h2>
								<Link
									to="/signin"
									className="bg-white py-2 btn hover:bg-white relative"
								>
									<span className="absolute left-0 bottom-3 ml-3">
										<FcGoogle />
									</span>
									<span>Google</span>
								</Link>
							</div>
							<div className="my-2">
								<Link
									to="/signin"
									className="btn bg-blue-700 text-white  hover:bg-blue-800 relative"
								>
									<span className="absolute left-0 top-1.5 ml-3">
										<ImFacebook className="inline-block" />
									</span>
									<span>Facebook</span>
								</Link>
							</div>
							<div className="my-2">
								<Link
									to="/signin"
									className="bg-gray-800 text-white py-2 btn hover:bg-black relative"
								>
									<span className="absolute left-0 bottom-3 ml-3">
										<ImGithub />
									</span>
									<span>Github</span>
								</Link>
							</div>
							<div className="my-2">
								<Link
									to="/signin"
									className=" bg-red-600 text-white pt-2 btn hover:bg-red-700 relative"
								>
									<span className="absolute left-0 ml-3 bottom-3">
										<MdEmail />
									</span>
									<span>Email</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
