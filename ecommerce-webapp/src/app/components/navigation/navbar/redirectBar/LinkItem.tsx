import Link from "next/link";

const LinkItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li

    >
      <Link href={href}>
        <p>{children}</p>
      </Link>
    </li>
  );

  export default LinkItem;