import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiCreditCard,
  HiExclamation,
  HiInbox,
  HiOutlineCash,
  HiUser,
} from "react-icons/hi";
import { useRouter } from "next/router";
import { LoginBtn } from "@/components/Public/LoginBtn";
import { ConnectedBtn } from "@/components/Public/ConnectedBtn";
import { useGetPageName } from "@/hooks/useGetPageName";
import { useSession } from "next-auth/react";

export default function AdminSideBar() {
  const { data: session } = useSession();
  const router = useRouter();
  const pageName = useGetPageName(router.pathname);
  return (
    <div>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="w-full lg:w-max "
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin/dashboard/"
              icon={HiChartPie}
              className={`${
                pageName === "Dashboard"
                  ? "bg-orange-400 text-white"
                  : "bg-white"
              }`}
            >
              <p>Dashboard</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/servers/"
              icon={HiInbox}
              className={`${
                pageName === "Servers" ? "bg-orange-400 text-white" : "bg-white"
              }`}
            >
              <p>Servers</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/users/"
              icon={HiUser}
              className={`${
                pageName === "Users" ? "bg-orange-400 text-white" : "bg-white"
              }`}
            >
              <p>Users</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/matchs/"
              icon={HiOutlineCash}
              className={`${
                pageName === "Matchs" ? "bg-orange-400 text-white" : "bg-white"
              }`}
            >
              <p>Matchs</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/conflits/"
              icon={HiExclamation}
              className={`${
                pageName === "Conflits"
                  ? "bg-orange-400 text-white"
                  : "bg-white"
              }`}
            >
              <p>Conflits</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/cashout-demands/"
              icon={HiCreditCard}
              className={`${
                pageName === "Cashout-demands"
                  ? "bg-orange-400 text-white"
                  : "bg-white"
              }`}
            >
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
        <div className="mt-10 hover:opacity-90">
          {session ? <ConnectedBtn /> : <LoginBtn />}
        </div>
      </Sidebar>
    </div>
  );
}
