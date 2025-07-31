import React, { ReactNode } from "react";

import styles from "./Footer.module.scss";
import classNames from "classnames";
import Image from "next/image";
import Title from "@/components/Atoms/Title/Title";
import InputText from "@/components/Atoms/Input/InputText/InputText";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import Icons from "@/components/Atoms/Icons/Icons";
import Link from "next/link";
import { about, order, shop, social } from "@/mocks/footer";

interface IFooter {
  className?: string;
}

interface IServiceOption {
  url: string;
  title: string;
}

interface IService {
  children?: ReactNode;
  dataSource?: IServiceOption[];
  className?: string;
}

export const ChildrenService = ({
  children,
  dataSource = [],
  className,
}: IService) => {
  return (
    <ul className={className}>
      <>
        <li>{children}</li>
        {dataSource &&
          dataSource?.map((data, index) => (
            <li key={index}>
              <Link href={data.url}>{data.title}</Link>
            </li>
          ))}
      </>
    </ul>
  );
};

function Footer({ className }: IFooter) {
  const serviceList = [
    { label: "Đặt hàng & Hỗ trợ", data: order },
    { label: "Shop", data: shop },
    { label: "Về Cocoon", data: about },
    { label: "Mạng xã hội", data: social },
  ];
  return (
    <footer className={classNames(styles.wrapper, className)}>
      <div className={styles.ft_img}>
        <Image
          src="/img/top/footer-image.jpg"
          alt="footer"
          width={960}
          height={1080}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_top}>
          <Title level={2} className={styles.title}>
            Đăng ký để nhận thông tin khuyến mãi sớm nhất từ Cocoon
          </Title>
          <div className={styles.email}>
            <InputText
              type="email"
              className={{
                wrapper: styles.email_warpper,
                input: styles.email_input,
              }}
              postfixIcon={<Icons.ArrowRightIcon />}
              placeholder="Nhập địa chỉ email"
            />
            <Paragraph level={4} className={styles.email_description}>
              Đăng ký để nhận thông tin liên lạc về các sản phẩm, dịch vụ, cửa
              hàng, sự kiện và các vấn đề đáng quan tâm của Cocoon.
            </Paragraph>
          </div>

          <div className={styles.service}>
            {serviceList.map((item, index) => (
              <ChildrenService
                key={index}
                dataSource={item.data}
                className={styles.service_list}
              >
                {item.label}
              </ChildrenService>
            ))}
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.content}>
            <Title level={3}>WEBSITE THUỘC QUYỀN CÔNG TY CỔ PHẦN Y&B</Title>
            <Paragraph level={5}>
              GCNĐKKD: 0315803699 | SỞ KẾ HOẠCH VÀ ĐẦU TƯ TP. HỒ CHÍ MINH CẤP
              LẦN ĐẦU NGÀY 22/07/2019
              <br />
              14D1, KHU PHỐ 1A, ĐƯỜNG QUỐC LỘ 1A, PHƯỜNG TÂN THỚI HIỆP, QUẬN 12,
              TP. HỒ CHÍ MINH, VIỆT NAM
            </Paragraph>
          </div>

          <div className={styles.content}>
            <Title level={3}>
              SẢN XUẤT VÀ CHỊU TRÁCH NHIỆM VỀ HÀNG HOÁ
              <br />
              CÔNG TY TNHH NATURE STORY
            </Title>
            <Paragraph level={5}>
              GCNĐKKD: 1101983767 / SỞ KẾ HOẠCH VÀ ĐẦU TƯ TỈNH LONG AN CẤP LẦN
              ĐẦU NGÀY: 15/04/2021
              <br />
              LÔ LF24A-LF25 ĐƯỜNG SỐ 2, KHU CÔNG NGHIỆP XUYÊN Á, XÃ MỸ HẠNH BẮC,
              HUYỆN ĐỨC HÒA, TỈNH LONG AN, VIỆT NAM
            </Paragraph>
          </div>

          <div className={styles.ministry_of_industry}>
            <Image
              src="/img/common/bocongthuong.png"
              alt="bo cong thuong"
              width={132}
              height={50}
            />
          </div>

          <div className={styles.copyright}>
            <Paragraph level={5}>
              © 2025 Cocoon Vietnam. All rights reserved.
            </Paragraph>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
