import { lazyFn } from "@/util/lazy/Lazy"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const RouteSetup = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* ALL */}
                <Route path="*" element={lazyFn(() => import("@pages/home"))}>
                    {/* Home */}
                    <Route path="" element={lazyFn(() => import("@pages/adminPage"))}></Route>
                    {/* Logs */}
                    <Route path="log/all" element={lazyFn(() => import("@pages/log/Log"))}></Route>
                    {/* Member list */}
                    <Route path="member/list" element={lazyFn(() => import("@pages/member/MemberList"))}></Route>
                    {/* member online list */}
                    <Route path="member/online-list" element={lazyFn(() => import("@/pages/member/components/online-list/MemberOnlineList"))}></Route>
                    {/* User list */}
                    <Route path="user/list" element={lazyFn(() => import("@pages/user"))}></Route>
                    {/* user recycle */}
                    <Route path="user/banlist" element={lazyFn(() => import("@/pages/user/components/recycle"))}></Route>
                    {/* Product list */}
                    <Route path="product/list" element={lazyFn(() => import("@pages/product"))}></Route>
                    {/* Product recycle */}
                    <Route path="product/recycle" element={lazyFn(() => import("@pages/product/component/recycle"))}></Route>
                    {/* Banner list */}
                    <Route path="banner/list" element={lazyFn(() => import("@pages/banner"))}></Route>
                    {/* Brand list */}
                    <Route path="brand/list" element={lazyFn(() => import("@pages/brand"))}></Route>
                    {/* Category list */}
                    <Route path="category/list" element={lazyFn(() => import("@pages/category"))}></Route>
                    {/* Vocher list */}
                    <Route path="vocher/list" element={lazyFn(() => import("@pages/vocher"))}></Route>
                    {/* setting */}
                    <Route path="setting" element={lazyFn(() => import("@pages/setting"))}></Route>
                </Route>

                {/* AUTHEN */}
                <Route path="/authen" element={lazyFn(() => import("@pages/authen"), localStorage.getItem("tokenAdmin") == null, "/")}></Route>
            </Routes>
        </BrowserRouter>
    )
}