import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiCreditCard,
  HiExclamation,
  HiInbox,
  HiOutlineCash,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function AdminSideBar() {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="w-full lg:w-max "
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard/" icon={HiChartPie}>
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/servers/" icon={HiInbox}>
            <p>Servers</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/users/" icon={HiUser}>
            <p>Users</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/matchs/" icon={HiOutlineCash}>
            <p>Matchs</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/conflits/" icon={HiExclamation}>
            <p>Conflits</p>
          </Sidebar.Item>
          <Sidebar.Item href="/admin/cashout-demands/" icon={HiCreditCard}>
            <p>Cash Out Demands</p>
          </Sidebar.Item>

          {/* <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sales</Sidebar.Item>
            <Sidebar.Item href="#">Refunds</Sidebar.Item>
            <Sidebar.Item href="#">Shipping</Sidebar.Item>
          </Sidebar.Collapse> */}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
