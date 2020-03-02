const projectList = [
  {
    id: 0,
    order: 0,
    filename: 'rydanz',
    title: 'RYDANZ',
    category: 'Responsive web design',
    titleLang: 'en',
    titleColor: '#fff',
    categoryColor: '#fff',
    releaseDate: '2018.09',
    role: '메인&서브디자인',
    desc1: {
      title: 'RADANZ 반응형 웹사이트 구축',
      text: `라이단즈 홈페이지 신규 구축 프로젝트는 고객 신뢰, 전문장비를 바탕으로 만들어진 제품을\n사용자에게 기업 아이덴티티를 전달하고 라이단즈만의 기술, 제품 등을 홍보하기 위한 목적으로\n진행한 프로젝트입니다.`,
    },
    desc2: {
      title: '사용자 환경에 맞춰 동일한 경험 제공',
      text: `다양한 웹 브라우저를 대응하기 위한 반응형 웹을 구현하였으며 이를 통해 콘텐츠의 일원화 및 운영의 효율성을 증대하였습니다.`,
      backgroundColor: '#777',
    },
    subPageCount: 2,
    designDesc: `라이단즈의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
    colors: {
      main: '#004098',
      sub: ['#dbdbdb']
    },
    fonts: [
      {id: 1, name: 'Noto Sans KR'},
      {id: 2, name: 'Poppins'}
    ]
  }, {
    id: 1,
    order: 1,
    filename: 'pito',
    title: 'PITO',
    category: 'Responsive web design',
    titleLang: 'en',
    titleColor: '#222',
    categoryColor: '#222',
    releaseDate: '2019.01',
    role: '메인디자인',
    desc1: {
      title: 'PITO 원페이지 반응형 웹사이트 구축',
      text: `PITO 홈페이지 신규 구축 프로젝트는 행복마루컨설팅의 내부제보 시스템입니다.\n기업의 IT기반의 컨설팅 이미지를 핵심적으로 부각할수있는 그래픽 이미지를 사용하였고\n원페이지 디자인을 통해 집약적이고 컨텐츠 중심으로 구축을 위한 목적으로 진행한 프로젝트입니다.`,
    },
    subPageCount: 0,
    designDesc: `PITO의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
    colors: {
      main: '#003690',
      sub: ['#16adfa']
    },
    fonts: [
      {id: 1, name: 'Noto Sans KR'},
      {id: 2, name: 'Roboto'}
    ]
  }, {
    id: 2,
    order: 2,
    filename: 'speedrack',
    title: '영진산업',
    category: 'Responsive web design',
    titleLang: 'ko',
    titleColor: '#222',
    categoryColor: '#222',
    releaseDate: '2019.02',
    role: '서브디자인',
    desc1: {
      title: '영진산업 다국어 반응형 웹사이트 구축',
      text: `영진산업 홈페이지 다국어 구축 프로젝트는 제품의 기본 정보를 한 눈에 확인할 수 있는 구성과\n전 세계 글로벌 고객에게 일관된 영진산업 브랜드를 경험 제공을 위한 목적으로 진행한 프로젝트입니다.`,
    },
    desc2: {
      title: '사용자 환경에 맞춰 동일한 경험 제공',
      text: `다양한 웹 브라우저를 대응하기 위한 반응형 웹을 구현하였으며 이를 통해 콘텐츠의 일원화 및 운영의 효율성을 증대하였습니다.`,
      backgroundColor: '#777',
    },
    subPageCount: 3,
    designDesc: `영진산업의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
    colors: {
      main: '#394784',
      sub: ['#e56b37']
    },
    fonts: [
      {id: 1, name: 'Raleway'},
      {id: 2, name: 'Open Sans'}
    ]
  }, {
    id: 3,
    order: 3,
    filename: 'openstore',
    title: '템플릿',
    category: 'Responsive web design',
    titleLang: 'ko',
    titleColor: '#fff',
    categoryColor: '#fff',
    releaseDate: '2018.09',
    role: '메인디자인',
    desc1: {
      title: '템플릿 원페이지 반응형 웹사이트 구축',
      text: `템플릿 홈페이지 구축 프로젝트는 브랜드의 가치를 표현하기 위해 비주얼 디자인에\n중점을 두어 전문성이 돋보일 수 있도록 하고. 기본 레이아웃 구성과 사용자에게 높은 정보 전달성을\n제공할 수 있도록 목적으로 진행한 프로젝트입니다.`,
    },
    subPageCount: 0,
  }, {
    id: 4,
    order: 4,
    filename: 'hellochinese',
    title: '나래식품',
    category: 'Responsive web design',
    titleLang: 'ko',
    titleColor: '#fff',
    categoryColor: '#fff',
    releaseDate: '2018.08',
    role: '메인&서브디자인',
    desc1: {
      title: '나래식품 반응형 웹사이트 리뉴얼',
      text: `나래식품 홈페이지 리뉴얼 프로젝트는 철저한 관리를 통해 최고의 품질을 전하는\n브랜드의 가치를 바탕으로 제품의 복잡한 정보를 쉽고 명확하게 표현하고 친근한 이미지와 정보 전달을\n위한 목적으로 진행한 프로젝트입니다.`,
    },
    desc2: {
      title: '사용자 환경에 맞춰 동일한 경험 제공',
      text: `다양한 웹 브라우저를 대응하기 위한 반응형 웹을 구현하였으며 이를 통해 콘텐츠의 일원화 및 운영의 효율성을 증대하였습니다.`,
      backgroundColor: '#777',
    },
    subPageCount: 3,
    designDesc: `나래식품의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
    colors: {
      main: '#6e9e3a',
      sub: ['#fbfbfb']
    },
    fonts: [
      {id: 1, name: 'Raleway'},
      {id: 2, name: 'Open Sans'}
    ]
  }, {
    id: 5,
    order: 5,
    filename: 'hotdog',
    title: '코끼리가\n반한 핫도그',
    category: 'Responsive web design',
    titleLang: 'ko',
    titleColor: '#222',
    categoryColor: '#222',
    releaseDate: '2018.08',
    role: '메인&서브디자인',
    desc1: {
      title: '코끼리가 반한 핫도그 반응형 웹사이트 리뉴얼',
      text: `코끼리가 반한 핫도그 홈페이지 리뉴얼 프로젝트는  부담 없는 가격의 건강한 먹거리를 제공하는 기업입니다.\n이러한 기업정신과 음식에 대한 철학이 잘 드러내며 소비자와 가맹점주 모두가 가치를 느끼고,\n자부심을 느낄 수 있도록  진행한 프로젝트입니다..`,
    },
    desc2: {
      title: '사용자 환경에 맞춰 동일한 경험 제공',
      text: `다양한 웹 브라우저를 대응하기 위한 반응형 웹을 구현하였으며 이를 통해 콘텐츠의 일원화 및 운영의 효율성을 증대하였습니다.`,
      backgroundColor: '#777',
    },
    subPageCount: 2,
    designDesc: `코끼리가 반한 핫도그의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
    colors: {
      main: '#f64c8b',
      sub: ['#f9f9f9']
    },
    fonts: [
      {id: 1, name: 'BM JUA'},
      {id: 2, name: 'NanumGothic'}
    ]
  }
]

export {
  projectList
}