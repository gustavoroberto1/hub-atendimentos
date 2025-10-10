import styles from './styles.module.css'

import { PageTitle } from "@/components/PageTitle";
import { PriorityTicket } from '@/components/PriorityTicket';
import { StatusTicket } from '@/components/StatusTicket';
import { TypeTicket } from '@/components/TypeTicket';
import { FaArrowLeft } from "react-icons/fa6";
import { LuBuilding2, LuMessageSquare, LuTicketSlash, LuUserRound } from 'react-icons/lu';
import { MdOutlineSettings, MdOutlineTimer } from 'react-icons/md';
import { SiInstatus } from 'react-icons/si';
import { TbUsers } from 'react-icons/tb';

export default function TicketDetail() {
    return (
        <div className={styles.container}>
            <div className={styles.titleSection}>
                <PageTitle
                    title="Ticket TK-001"
                    subtitle="O Login do sistema não está funcionando"
                />
                <button className={styles.button}>
                    <FaArrowLeft size={24} /> Voltar
                </button>
            </div>

            <div className={styles.content}>
                <main>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <LuTicketSlash color="#000000" size={20} />
                            <h2>Detalhes do Ticket</h2>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.infosStatusAndType}>
                                <StatusTicket status='in-progress' />
                                <TypeTicket type='corrective' />
                                <PriorityTicket priority='high' />
                            </div>
                            <div className={styles.titleAndSubtitle}>
                                <h2>Sistema de login não funciona</h2>
                                <p>ID: TK-001</p>
                            </div>
                            <div className={styles.description}>
                                <h3>Descrição completa</h3>
                                <p>Usuários não conseguem fazer login no sistema. Erro 500 sendo retornado.</p>
                            </div>
                            <div className={styles.dataInfo}>

                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <LuBuilding2 color="#000000" size={20} />
                            <h2>Informação do Cliente</h2>
                        </div>

                    </div>
                    
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <LuMessageSquare color="#000000" size={20} />
                            <h2>Comentário e Atualizações</h2>
                        </div>

                    </div>
                </main>
                <aside>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <MdOutlineSettings color="#000000" size={20} />
                            <h2>Ações</h2>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <SiInstatus color="#000000" size={20} />
                            <h2>Status</h2>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <LuUserRound color="#000000" size={20} />
                            <h2>Responsável</h2>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <MdOutlineTimer color="#000000" size={20} />
                            <h2>Tempo de Trabalho</h2>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}