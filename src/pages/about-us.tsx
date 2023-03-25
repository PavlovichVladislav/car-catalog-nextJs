import Layout from "@/components/layout/Layout";
import { NextPageAuth } from "@/models/page";
import { NextPage } from "next";

const AboutUsPage: NextPageAuth = () => {
    return <Layout title="about-us page">about-us</Layout>
}

AboutUsPage.isOnlyUser = true;

export default AboutUsPage