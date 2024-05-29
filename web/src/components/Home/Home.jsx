import React from 'react';
import './Home.css'

/**
 * @typedef {object} IHomeProps
 * @property {string} [className]
 * @param { IHomeProps } props
 */
export function Home(props) {
  return (
    <div className="home-container">
      <div className="notification">
        <div className="test-notification">未提出の小テストがあります</div>
        <div className="test-date">5月6日 - Java 第5回</div>
      </div>
      <div className="notification">
        <div className="test-notification">未提出の課題があります</div>
        <div className="test-date">5月7日 - ここをクリックして提出</div>
      </div>
      <div className="date-info">
        <h2>2024年 5月24日（金）</h2>
        <p><strong>本日の内容</strong> 午前: JavaScript 午後: JavaScript</p>
        <p>本日のお知らせ: 小テストJavaScript 7回 JavaScript8回 やってね</p>
      </div>
      <div className="buttons">
        <button className="attendance-button">出席</button>
        <button className="text-button">テキスト</button>
      </div>
      <div className="feedback">
        <div className="session">
          <h3>2024-05-24(金) 10:00:00 - 12:30:00</h3>
          <p>第1回 インストラクター 講評</p>
          <p>満足度:</p>
          <div className="rating">★★★★☆</div>
          <p>コメント:</p>
          <textarea placeholder="感想を記入"></textarea>
          <button>送信済み</button>
        </div>
        <div className="session">
          <h3>2024-05-24(金) 13:30:00 - 18:00:00</h3>
          <p>第12回 インストラクター 講評</p>
          <p>満足度:</p>
          <div className="rating">☆☆☆☆☆</div>
          <p>コメント:</p>
          <textarea placeholder="感想を記入"></textarea>
          <button>送信</button>
        </div>
      </div>
    </div>
  );
}
