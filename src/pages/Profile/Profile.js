import Avatar from "@mui/material/Avatar";
import Card from "../../components/Ui/Card";
import Field from "../../components/Field/Field";
import styles from "./Profile.module.css";

function ProfilePage() {
  return (
    <>
      <Card className={styles["main-profile"]}>
        <Avatar
          className={styles["avatar"]}
          alt="avatar"
          src="https://64.media.tumblr.com/70126cfb2f4e1cc5d0b62c2d7bc0f02d/906a247d92c1d5a8-73/s640x960/d2e5788de05b31e89b628f00a960582c31833638.jpg"
        />
        <h1 className={styles["name"]}>Lưu Văn Dũng</h1>
        <p className={styles["desc"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum obcaecati harum, praesentium ut voluptas
          aspernatur alias quibusdam quasi eius fugiat molestias est non magni, deserunt, tenetur dolorum ullam eaque.
        </p>
      </Card>
      <Card className={styles["profile-details"]}>
        <Field label="Student ID" currentValue="B20DCCB137" />
        <Field label="Email" currentValue="dunglv202@gmail.com" />
        <Field label="Password" currentValue="********" />
        <Field label="Theme" currentValue="Light" />
      </Card>
    </>
  );
}

export default ProfilePage;
