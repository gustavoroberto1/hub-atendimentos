import { FaCircleUser } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdCheckCircleOutline, MdDashboard, MdDns, MdOutlineSchedule, MdVerified } from "react-icons/md";

export const MENU_NAVIGATION_ITEMS = [
	{
		title: "Abrir Atendimento",
		path: "/abertura-atendimento",
		icon: IoMdAddCircleOutline,
	},
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: MdDashboard,
  },
  {
    title: "Clientes",
    path: "/clientes",
    icon: FaCircleUser,
  },
  {
    title: "Atendimentos",
    path: "/chamados/todos",
    icon: MdDns,
  },
  {
    title: "Novos",
    path: "/chamados/novos",
    icon: MdVerified,
    status: ["New"],
  },
  {
    title: "Em Atendimento",
    path: "/chamados/em-atendimento",
    icon: MdOutlineSchedule,
    status: ["Em andamento"],
  },
  {
    title: "Em Validação",
    path: "/chamados/em-validacao",
    icon: GrTest,
    status: ["Em andamento"],
  },
  {
    title: "Concluídos",
    path: "/chamados/concluidos",
    icon: MdCheckCircleOutline,
    status: ["Resolvido"],
  },
];
