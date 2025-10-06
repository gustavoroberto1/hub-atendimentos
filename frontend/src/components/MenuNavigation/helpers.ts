import { FaCircleUser } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdCheckCircleOutline, MdDashboard, MdDns, MdOutlineSchedule, MdVerified } from "react-icons/md";

export const MENU_NAVIGATION_ITEMS = [
	{
		title: "Abrir Atendimento",
		path: "/tickets/new",
		icon: IoMdAddCircleOutline,
	},
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: MdDashboard,
  },
  {
    title: "Clientes",
    path: "/clients",
    icon: FaCircleUser,
  },
  {
    title: "Atendimentos",
    path: "/tickets",
    icon: MdDns,
  },
  {
    title: "Novos",
    path: "/tickets",
    icon: MdVerified,
    status: ["New"],
  },
  {
    title: "Em Atendimento",
    path: "/tickets",
    icon: MdOutlineSchedule,
    status: ["Em andamento"],
  },
  {
    title: "Em Validação",
    path: "/tickets",
    icon: GrTest,
    status: ["Em andamento"],
  },
  {
    title: "Concluídos",
    path: "/tickets/concluidos",
    icon: MdCheckCircleOutline,
    status: ["Resolvido"],
  },
];
