export function TableClient({ clients }: { clients: TClient[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Empresa</th>
          <th>Endereço</th>
          <th>Contato</th>
          <th>Status</th>
          <th>Criado em</th>
          <th>Atualizado em</th>
        </tr>
      </thead>
      <tbody>
        {clients.map(client => (
          <tr key={client.id}>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>{client.company}</td>
            <td>{client.address}</td>
            <td>{client.contactPerson}</td>
            <td>{client.status}</td>
            <td>{client.createdAt}</td>
            <td>{client.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}