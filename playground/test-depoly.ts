import sirv from "sirv";
import polka from "polka";

const assets = sirv(".output/public", {
  maxAge: 31536000, // 1Y
  immutable: true,
});

polka().use(assets).listen(3000);
