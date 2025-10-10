import { FaCircleUser } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdCheckCircle, MdCheckCircleOutline, MdDashboard, MdDns, MdHistory, MdNewReleases, MdOutlineSchedule, MdSchedule, MdVerified } from "react-icons/md";

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
    path: "/tickets?status=new",
    icon: MdNewReleases,
  },
  {
    title: "Em Andamento",
    path: "/tickets?status=in_progress",
    icon: MdSchedule,
  },
  {
    title: "Em Validação",
    path: "/ticket?status=in_validation",
    icon: MdHistory,
  },
  {
    title: "Finalizado",
    path: "/tickets?status=finished",
    icon: MdCheckCircle,
  },
];
