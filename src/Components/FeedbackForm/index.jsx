import React, { useState } from "react";
import useStyles from "./styles";
import { Form, Input, Button } from "antd";
import { useTranslation, Trans } from "react-i18next";

const FeedbackForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({ username: "", phoneNumber: "" });

  const handleSubmit = ({ username, phoneNumber }) => {
    setFormData({ username, phoneNumber });
    console.log(formData, "formData");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={classes.root}>
      <Form
        name="basic"
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <div className={classes.formItemsWrap}>
          <Form.Item
            label={t('main.your name') + ':'}
            name="username"
            className={classes.formItem}
            rules={[{ required: true, message: `${t('main.alert name')}` }]}
          >
            <Input
              className={classes.input}
              autoComplete="off"
              placeholder={t('main.your name')}
            />
          </Form.Item>
          <Form.Item
            label={t('main.phone') + ':'}
            name="phoneNumber"
            className={classes.formItem}
            rules={[{ required: true, message: `${t('main.alert phone')}` }]}
          >
            <Input
              className={classes.input}
              autoComplete="off"
              type="number"
              placeholder="+380*******"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              <Trans i18nKey="main.send button">
                Відправити
              </Trans>
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default FeedbackForm;
