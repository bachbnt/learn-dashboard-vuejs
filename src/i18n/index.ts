import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'vi',
  messages: {
    en: {
      pTitle: 'Giá trước điều chỉnh',
      cTitle: 'Cổ tức bằng tiền mặt',
      p1Title: 'Giá phát hành thêm',
      r1Title: 'Tỉ lệ phát hành thêm',
      r2Title: 'Tỉ lệ cổ tức bằng cổ phiếu',
      _pTitle: 'Giá sau điều chỉnh'
    },
    vi: {
      pTitle: 'Giá trước điều chỉnh',
      cTitle: 'Cổ tức bằng tiền mặt',
      p1Title: 'Giá phát hành thêm',
      r1Title: 'Tỉ lệ phát hành thêm',
      r2Title: 'Tỉ lệ cổ tức bằng cổ phiếu',
      _pTitle: 'Giá sau điều chỉnh'
    }
  }
})

export default i18n
